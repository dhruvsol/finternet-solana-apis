import { Controller } from "@/interfaces/controller.interface";
import { logger } from "@/utils/logger";
import { enc } from "crypto-js";
import { Router, Request, Response } from "express";

export class UserController implements Controller {
	path: string = "/user";
	router: Router = Router();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		// this.router.get(`${this.path}/:wallet`, this.throttle(this.walletBalance));
		logger.debug("User Controller initialized");
		this.router.post(`${this.path}/create`, this.createUser);
		this.router.post(`${this.path}/update`, this.updateUser);
		// this.router.post(`${this.path}/:id`, this.id);
	}

	private createUser = async (req: Request, res: Response) => {
		try {
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};
	private updateUser = async (req: Request, res: Response) => {
		try {
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};
}
