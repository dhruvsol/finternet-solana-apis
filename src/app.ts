import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import morganBody from "morgan-body";

import { Controller } from "./interfaces/controller";
import errorMiddleware from "./middleware/error.middleware";
import { env } from "./utils/env";
import { logger } from "./utils/logger";

class App {
	public app: express.Application;

	constructor(controllers: readonly Controller[]) {
		this.app = express();

		this.app.use("/checks", (_, response: Response) => {
			logger.info("Health check");
			response.status(200).send("OK");
		});

		this.initializeStandardMiddlewares();
		this.initializeControllers(controllers);
	}
	public listen(): void {
		this.app.listen(env.PORT, () => {
			logger.info(`App listening on the port ${env.PORT}`);
		});
	}
	public getServer(): express.Application {
		return this.app;
	}

	private initializeStandardMiddlewares() {
		this.app.set("trust proxy", true);

		this.app.use(
			cors({
				credentials: true,
				optionsSuccessStatus: 200,
				origin: "*",
				methods: ["GET", "POST", "OPTIONS"],
				allowedHeaders: [
					"Content-Type",
					"Authorization",
					"Content-Encoding",
					"Accept-Encoding",
				],
			}),
		);

		this.app.use(bodyParser.json());
		this.app.use(cookieParser());
		this.app.use(express.json());
		this.app.use(
			morgan(function (tokens, req, res) {
				logger.info(
					`Request: ${tokens.method(req, res)} ${tokens.url(req, res)}`,
					{
						body: req.body,
						cookies: req.cookies,
						headers: req.headers,
						params: req.params,
						query: req.query,
						ip: req.ip,
						ips: req.ips,
						route: tokens.url(req, res),
					},
				);
				return [
					tokens.method(req, res),
					tokens.url(req, res),
					tokens.status(req, res),
					tokens.res(req, res, "content-length"),
					"-",
					tokens["response-time"](req, res),
					"ms",
				].join(" ");
			}),
		);
		this.app.use(helmet());
		this.app.use(morgan("combined"));

		morganBody(this.app, {
			noColors: true,
			logResponseBody: false,
			skip: () => {
				if (process.env.NODE_ENV === "production") {
					return true;
				}
				return false;
			},
		});
	}

	private initializeControllers(controllers: readonly Controller[]) {
		// All the generic containers as supplied by app
		controllers.forEach((controller) => {
			this.app.use(controller.router);
		});

		// Error Handling
		this.app.use(errorMiddleware);
	}
}
export default App;
