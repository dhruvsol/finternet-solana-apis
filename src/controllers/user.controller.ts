import { Controller } from "@/interfaces/controller.interface";
import { logger } from "@/utils/logger";
import { Router } from "express";

export class UserController implements Controller {
	path: string = "/user";
	router: Router = Router();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		// this.router.get(`${this.path}/:wallet`, this.throttle(this.walletBalance));
		logger.debug("User Controller initialized");
	}
}
