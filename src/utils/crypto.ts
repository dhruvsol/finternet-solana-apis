import CryptoJS from "crypto-js";
import { env } from "./env";

const SECRET = env.SEC;

export function encrypt(data: any) {
	return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET).toString();
}

export function decrypt(data: any) {
	var bytes = CryptoJS.AES.decrypt(data, SECRET);
	return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
