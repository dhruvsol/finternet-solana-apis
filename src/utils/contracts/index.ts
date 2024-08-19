import { AnchorProvider, Program, utils } from "@coral-xyz/anchor";
import TMIDL from "../idl/token-manager.json";
import UMIDL from "../idl/user-manager.json";
import { TokenManager } from "./token-contract";
import { UserManager } from "./user-contract";
import { Connection } from "@solana/web3.js";
import { env } from "../env";
import { web3 } from "@coral-xyz/anchor";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";

export const connection = new Connection(env.RPC_URL);
export const signerWallet = web3.Keypair.fromSecretKey(
	utils.bytes.bs58.decode(env.SIGNER),
);
export const getTMProgram = () => {
	return new Program(
		TMIDL as any,
		new AnchorProvider(connection, new NodeWallet(signerWallet), {
			commitment: "confirmed",
		}),
	) as unknown as Program<TokenManager>;
};
export const getUMProgram = () => {
	return new Program(
		UMIDL as any,
		new AnchorProvider(connection, new NodeWallet(signerWallet), {
			commitment: "confirmed",
		}),
	) as unknown as Program<UserManager>;
};
