import { createEnv } from "@t3-oss/env-core";
import { config } from "dotenv";
import { z } from "zod";

config();

export const env = createEnv({
	clientPrefix: "PUBLIC_",
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
	client: {},
	server: {
		PORT: z.string().default("3001"), // Port for the backend server
		NODE_ENV: z.enum(["production", "development"]),
		SEC: z.string().min(5),
		REDIS_URL: z.string().min(5),
	},
});
