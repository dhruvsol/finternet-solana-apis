import { web3 } from "@coral-xyz/anchor";
import { connection } from "./contracts";

export const sendTx = async (
	ixs: web3.TransactionInstruction[],
	signer: web3.Keypair,
) => {
	const { blockhash } = await connection.getLatestBlockhash();
	const txMessage = new web3.TransactionMessage({
		instructions: ixs,
		payerKey: signer.publicKey,
		recentBlockhash: blockhash,
	}).compileToV0Message();

	const tx = new web3.VersionedTransaction(txMessage);
	tx.sign([signer]);

	return connection.sendRawTransaction(tx.serialize());
};
