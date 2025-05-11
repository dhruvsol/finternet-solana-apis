import { web3 } from "@coral-xyz/anchor";
import { connection } from "./contracts";
import { ComputeBudgetProgram } from "@solana/web3.js";

export const sendTx = async (
	ixs: web3.TransactionInstruction[],
	signer: web3.Keypair,
) => {
	const { blockhash } = await connection.getLatestBlockhash();

	const testInstructions = [
		ComputeBudgetProgram.setComputeUnitLimit({ units: 1_400_000 }),
		...ixs,
	];

	const testTransaction = new web3.VersionedTransaction(
		new web3.TransactionMessage({
			instructions: testInstructions,
			payerKey: signer.publicKey,
			recentBlockhash: (await connection.getLatestBlockhash()).blockhash,
		}).compileToV0Message(),
	);

	const rpcResponse = await connection.simulateTransaction(testTransaction, {
		replaceRecentBlockhash: true,
		sigVerify: false,
	});
	const unitsConsumed = rpcResponse.value.unitsConsumed || 0;
	let customersCU = Math.ceil(unitsConsumed * 1.1);
	if (customersCU < 1000) {
		customersCU = 200_000;
	}
	const txMessage = new web3.TransactionMessage({
		instructions: [
			ComputeBudgetProgram.setComputeUnitLimit({ units: customersCU }),
			ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 1_000_000 }),
			...ixs,
		],
		payerKey: signer.publicKey,
		recentBlockhash: blockhash,
	}).compileToV0Message();

	const tx = new web3.VersionedTransaction(txMessage);
	tx.sign([signer]);

	return connection.sendRawTransaction(tx.serialize());
};
