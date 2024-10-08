import { NextFunction, Request, Response } from "express";

import HttpException from "../exceptions/httpException";

function errorMiddleware(
	error: HttpException,
	_request: Request,
	response: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_next: NextFunction,
) {
	const status = error.status ?? 500;
	const message = error.message ?? "Something went wrong";
	response.status(status).send(message);
}

export default errorMiddleware;
