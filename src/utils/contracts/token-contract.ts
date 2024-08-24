export type TokenManager = {
	version: "0.1.0";
	name: "token_manager";
	instructions: [
		{
			name: "tokenize";
			accounts: [
				{
					name: "eventAuthority";
					isMut: false;
					isSigner: false;
				},
				{
					name: "program";
					isMut: false;
					isSigner: false;
				},
			];
			args: [
				{
					name: "data";
					type: "bytes";
				},
			];
		},
		{
			name: "detokenize";
			accounts: [
				{
					name: "eventAuthority";
					isMut: false;
					isSigner: false;
				},
				{
					name: "program";
					isMut: false;
					isSigner: false;
				},
			];
			args: [
				{
					name: "data";
					type: "bytes";
				},
			];
		},
		{
			name: "approve";
			accounts: [
				{
					name: "eventAuthority";
					isMut: false;
					isSigner: false;
				},
				{
					name: "program";
					isMut: false;
					isSigner: false;
				},
			];
			args: [
				{
					name: "data";
					type: "bytes";
				},
			];
		},
		{
			name: "updateAssetStatus";
			accounts: [
				{
					name: "eventAuthority";
					isMut: false;
					isSigner: false;
				},
				{
					name: "program";
					isMut: false;
					isSigner: false;
				},
			];
			args: [
				{
					name: "data";
					type: "bytes";
				},
			];
		},
		{
			name: "updateAssetMetadata";
			accounts: [
				{
					name: "eventAuthority";
					isMut: false;
					isSigner: false;
				},
				{
					name: "program";
					isMut: false;
					isSigner: false;
				},
			];
			args: [
				{
					name: "data";
					type: "bytes";
				},
			];
		},
	];
	events: [
		{
			name: "EncryptedLog";
			fields: [
				{
					name: "data";
					type: "bytes";
					index: false;
				},
			];
		},
	];
};

export const IDL: TokenManager = {
	version: "0.1.0",
	name: "token_manager",
	instructions: [
		{
			name: "tokenize",
			accounts: [
				{
					name: "eventAuthority",
					isMut: false,
					isSigner: false,
				},
				{
					name: "program",
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: "data",
					type: "bytes",
				},
			],
		},
		{
			name: "detokenize",
			accounts: [
				{
					name: "eventAuthority",
					isMut: false,
					isSigner: false,
				},
				{
					name: "program",
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: "data",
					type: "bytes",
				},
			],
		},
		{
			name: "approve",
			accounts: [
				{
					name: "eventAuthority",
					isMut: false,
					isSigner: false,
				},
				{
					name: "program",
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: "data",
					type: "bytes",
				},
			],
		},
		{
			name: "updateAssetStatus",
			accounts: [
				{
					name: "eventAuthority",
					isMut: false,
					isSigner: false,
				},
				{
					name: "program",
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: "data",
					type: "bytes",
				},
			],
		},
		{
			name: "updateAssetMetadata",
			accounts: [
				{
					name: "eventAuthority",
					isMut: false,
					isSigner: false,
				},
				{
					name: "program",
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: "data",
					type: "bytes",
				},
			],
		},
	],
	events: [
		{
			name: "EncryptedLog",
			fields: [
				{
					name: "data",
					type: "bytes",
					index: false,
				},
			],
		},
	],
};
