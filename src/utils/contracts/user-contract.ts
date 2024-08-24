export type UserManager = {
	version: "0.1.0";
	name: "user_manager";
	instructions: [
		{
			name: "createUser";
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
			name: "updateUser";
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
			name: "transfer";
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
			name: "deleteUser";
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
			name: "rotateKey";
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
			name: "acceptIncomingAsset";
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

export const IDL: UserManager = {
	version: "0.1.0",
	name: "user_manager",
	instructions: [
		{
			name: "createUser",
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
			name: "updateUser",
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
			name: "transfer",
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
			name: "deleteUser",
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
			name: "rotateKey",
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
			name: "acceptIncomingAsset",
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
