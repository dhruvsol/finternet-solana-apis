import { Controller } from "@/interfaces/controller.interface";
import { logger } from "@/utils/logger";
import { Router, Request, Response } from "express";

export class TokenController implements Controller {
	path: string = "/token";
	router: Router = Router();
	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		// this.router.get(`${this.path}/:wallet`, this.throttle(this.walletBalance));
		logger.debug("Token Controller initialized");
		this.router.post(`${this.path}/tokenize`, this.tokenize);
		this.router.post(`${this.path}/detokenize`, this.detokenize);
		this.router.post(`${this.path}/transfer`, this.transfer);
	}
	private tokenize = async (req: Request, res: Response) => {
		try {
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};
	private detokenize = async (req: Request, res: Response) => {
		try {
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};
	private transfer = async (req: Request, res: Response) => {
		try {
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};
}
