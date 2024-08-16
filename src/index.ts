import App from "./app";
import { logger } from "./utils/logger";
import { TokenController } from "./controllers/token.controller";
import { UserController } from "./controllers/user.controller";
const main = async () => {
	const app = new App([new UserController(), new TokenController()]);

	app.listen();
};

main()
	.then(() => {
		logger.info("App started");
	})
	.catch((err) => {
		logger.error("App failed");
		logger.error(err.stack);
	});
