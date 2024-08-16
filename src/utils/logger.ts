import winston, { format } from "winston";

export const prettyJSON = (data: unknown) => JSON.stringify(data, null, 2);

const alignedWithColorsAndTime = format.combine(
	format.colorize(),
	format.timestamp(),
	format.align(),
	format.printf(
		(info) =>
			`${info.timestamp} [${info.label}] ${info.level}: ${info.message}`,
	),

	format.json(),
);

const options = {
	console: {
		level: "debug",
		handleExceptions: true,
		json: true,
		colorize: true,
	},
};

const transports: winston.transport[] = [];

export const logger = winston.createLogger({
	level: "info",
	format: alignedWithColorsAndTime,
	transports: [new winston.transports.Console(options.console), ...transports],
	exitOnError: false,
});
