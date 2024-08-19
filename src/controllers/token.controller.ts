import { Controller } from "@/interfaces/controller.interface";
import { RedisService } from "@/services/redis.service";
import { getTMProgram, signerWallet } from "@/utils/contracts";
import { decrypt, encrypt } from "@/utils/crypto";
import { logger } from "@/utils/logger";
import { sendTx } from "@/utils/sendTx";
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
			const parsed = await decrypt(data);
			return res.send(parsed);
		} catch (e) {
			logger.error(e);
			return res.status(500).send("Error: Internal Server Error");
		}
	};

	private tokenize = async (req: Request, res: Response) => {
		try {
			const data = req.body;
			const program = getTMProgram();
			const encryptData = encrypt(data);
			const ix = await program.methods
				.tokenize(Buffer.from(encryptData))
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
	private detokenize = async (req: Request, res: Response) => {
		try {
			const data = req.body;
			const program = getTMProgram();
			const encryptData = encrypt(data);
			const ix = await program.methods
				.detokenize(Buffer.from(encryptData))
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
	private transfer = async (req: Request, res: Response) => {
		try {
			const data = req.body;
			const program = getTMProgram();
			const encryptData = encrypt(data);
			const ix = await program.methods
				.approve(Buffer.from(encryptData))
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
