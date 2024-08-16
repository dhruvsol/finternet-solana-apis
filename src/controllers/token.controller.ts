import { Controller } from "@/interfaces/controller.interface";
import { RedisService } from "@/services/redis.service";
import { encrypt } from "@/utils/crypto";
import { logger } from "@/utils/logger";
import { Router, Request, Response } from "express";

export class TokenController implements Controller {
	path: string = "/token";
	router: Router = Router();
	redis = RedisService;
	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		// this.router.get(`${this.path}/:wallet`, this.throttle(this.walletBalance));
		logger.debug("Token Controller initialized");
		this.router.post(`${this.path}/tokenize`, this.tokenize);
		this.router.post(`${this.path}/detokenize`, this.detokenize);
		this.router.post(`${this.path}/transfer`, this.transfer);
		this.router.get(`${this.path}/decrypt/:sig`, this.decryptToken);
	}

	private decryptToken = async (req: Request, res: Response) => {
		try {
			const { sig } = req.params;
			const data = await this.redis.client.get(sig);
			return res.send(data);
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};

	private tokenize = async (req: Request, res: Response) => {
		try {
			const data = req.body;

			const encryptData = encrypt(data);
			await this.redis.client.set("<sig>", encryptData);
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};
	private detokenize = async (req: Request, res: Response) => {
		try {
			const data = req.body;

			const encryptData = encrypt(data);
			await this.redis.client.set("<sig>", encryptData);
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};
	private transfer = async (req: Request, res: Response) => {
		try {
			const data = req.body;

			const encryptData = encrypt(data);
			await this.redis.client.set("<sig>", encryptData);
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};
}
