import { Controller } from "@/interfaces/controller.interface";
import { RedisService } from "@/services/redis.service";
import { getUMProgram, signerWallet } from "@/utils/contracts";
import { encrypt } from "@/utils/crypto";
import { logger } from "@/utils/logger";
import { sendTx } from "@/utils/sendTx";
import { enc } from "crypto-js";
import { Router, Request, Response } from "express";

export class UserController implements Controller {
	path: string = "/user";
	router: Router = Router();
	redis = RedisService;
	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		// this.router.get(`${this.path}/:wallet`, this.throttle(this.walletBalance));
		logger.debug("User Controller initialized");
		this.router.post(`${this.path}/create`, this.createUser);
		this.router.post(`${this.path}/update`, this.updateUser);
		this.router.get(`${this.path}/decrypt/:sig`, this.decryptUser);
		// this.router.post(`${this.path}/:id`, this.id);
	}

	private decryptUser = async (req: Request, res: Response) => {
		try {
			const { sig } = req.params;
			const data = await this.redis.client.get(sig);
			return res.send(data);
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};

	private createUser = async (req: Request, res: Response) => {
		try {
			const data = req.body;

			const encryptData = encrypt(data);
			const program = getUMProgram();
			const ix = await program.methods
				.createUser(Buffer.from(encryptData))
				.accounts({
					program: program.programId,
				})
				.instruction();
			const sig = await sendTx([ix], signerWallet);
			await this.redis.client.set(sig, encryptData);
			return res.send({
				signature: sig,
			});
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};
	private updateUser = async (req: Request, res: Response) => {
		try {
			const data = req.body;
			const encryptData = encrypt(data);
			const program = getUMProgram();
			const ix = await program.methods
				.updateUser(Buffer.from(encryptData))
				.accounts({
					program: program.programId,
				})
				.instruction();
			const sig = await sendTx([ix], signerWallet);
			await this.redis.client.set(sig, encryptData);
			return res.send({
				signature: sig,
			});
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};
}
