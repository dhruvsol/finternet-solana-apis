import { Program } from "@coral-xyz/anchor";
import TMIDL from "../idl/token-manager.json";
import UMIDL from "../idl/user-manager.json";
import { TokenManager } from "./token-contract";
import { UserManager } from "./user-contract";

export const getTMProgram = () => {
	return new Program(TMIDL as any) as unknown as Program<TokenManager>;
};
export const getUMProgram = () => {
	return new Program(UMIDL as any) as unknown as Program<UserManager>;
};
