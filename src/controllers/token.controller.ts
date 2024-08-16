import { Controller } from "@/interfaces/controller.interface";
import { logger } from "@/utils/logger";
import { Router } from "express";

export class TokenController implements Controller {
	path: string = "/token";
	router: Router = Router();
	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		// this.router.get(`${this.path}/:wallet`, this.throttle(this.walletBalance));
		logger.debug("Token Controller initialized");
	}
}
