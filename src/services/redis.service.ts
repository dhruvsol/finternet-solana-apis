import { logger } from "@/utils/logger";
import AbstractService from "./abstract.service";
import { env } from "@utils/env";
import Redis from "ioredis";

export class RedisService implements AbstractService {
	static client: Redis;

	static async init() {
		logger.info("Redis init");
		const redis = new Redis(env.REDIS_URL, {
			maxRetriesPerRequest: null,
			connectTimeout: 10000,
		});

		this.client = redis;
	}
}
