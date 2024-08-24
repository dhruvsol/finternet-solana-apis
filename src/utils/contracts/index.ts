import { AnchorProvider, utils, Program } from "@coral-xyz/anchor";
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
		new web3.PublicKey("A5JxZVHgXe7fn5TqJXm6Hj2zKh1ptDapae2YjtXbZJoy"),
		new AnchorProvider(connection, new NodeWallet(signerWallet), {
			commitment: "confirmed",
		}),
	) as unknown as Program<TokenManager>;
};
export const getUMProgram = () => {
	return new Program(
		UMIDL as any,
		new web3.PublicKey("CmFuqQTLs2nQof5uaktJn1a6k2VdbGmZPfrJufB2Vm3F"),
		new AnchorProvider(connection, new NodeWallet(signerWallet), {
			commitment: "confirmed",
		}),
	) as unknown as Program<UserManager>;
};
