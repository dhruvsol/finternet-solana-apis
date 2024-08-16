import CryptoJS from "crypto-js";

const SECRET = "adsfbasdfjkkjjkbjkjkkjhadsf";

export function encrypt(data: any) {
	return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET).toString();
}

export function decrypt(data: any) {
	var bytes = CryptoJS.AES.decrypt(data, SECRET);
	return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
