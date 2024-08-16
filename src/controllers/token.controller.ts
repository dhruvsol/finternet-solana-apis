import { Controller } from "@/interfaces/controller.interface";
import { Router } from "express";

export class TokenController implements Controller {
	path: string = "/token";
	router: Router = Router();
}
