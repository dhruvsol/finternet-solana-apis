import { Controller } from "@/interfaces/controller.interface";
import { Router } from "express";

export class UserController implements Controller {
	path: string = "/user";
	router: Router = Router();
}
