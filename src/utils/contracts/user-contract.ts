/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/user_manager.json`.
 */
export type UserManager = {
	address: "CmFuqQTLs2nQof5uaktJn1a6k2VdbGmZPfrJufB2Vm3F";
	metadata: {
		name: "userManager";
		version: "0.1.0";
		spec: "0.1.0";
		description: "Created with Anchor";
	};
	instructions: [
		{
			name: "acceptIncomingAsset";
			discriminator: [45, 233, 132, 111, 25, 63, 163, 235];
			accounts: [
				{
					name: "eventAuthority";
					pda: {
						seeds: [
							{
								kind: "const";
								value: [
									95,
									95,
									101,
									118,
									101,
									110,
									116,
									95,
									97,
									117,
									116,
									104,
									111,
									114,
									105,
									116,
									121,
								];
							},
						];
					};
				},
				{
					name: "program";
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
			name: "createUser";
			discriminator: [108, 227, 130, 130, 252, 109, 75, 218];
			accounts: [
				{
					name: "eventAuthority";
					pda: {
						seeds: [
							{
								kind: "const";
								value: [
									95,
									95,
									101,
									118,
									101,
									110,
									116,
									95,
									97,
									117,
									116,
									104,
									111,
									114,
									105,
									116,
									121,
								];
							},
						];
					};
				},
				{
					name: "program";
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
			discriminator: [186, 85, 17, 249, 219, 231, 98, 251];
			accounts: [
				{
					name: "eventAuthority";
					pda: {
						seeds: [
							{
								kind: "const";
								value: [
									95,
									95,
									101,
									118,
									101,
									110,
									116,
									95,
									97,
									117,
									116,
									104,
									111,
									114,
									105,
									116,
									121,
								];
							},
						];
					};
				},
				{
					name: "program";
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
			discriminator: [86, 240, 194, 116, 31, 3, 172, 200];
			accounts: [
				{
					name: "eventAuthority";
					pda: {
						seeds: [
							{
								kind: "const";
								value: [
									95,
									95,
									101,
									118,
									101,
									110,
									116,
									95,
									97,
									117,
									116,
									104,
									111,
									114,
									105,
									116,
									121,
								];
							},
						];
					};
				},
				{
					name: "program";
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
			discriminator: [163, 52, 200, 231, 140, 3, 69, 186];
			accounts: [
				{
					name: "eventAuthority";
					pda: {
						seeds: [
							{
								kind: "const";
								value: [
									95,
									95,
									101,
									118,
									101,
									110,
									116,
									95,
									97,
									117,
									116,
									104,
									111,
									114,
									105,
									116,
									121,
								];
							},
						];
					};
				},
				{
					name: "program";
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
			discriminator: [9, 2, 160, 169, 118, 12, 207, 84];
			accounts: [
				{
					name: "eventAuthority";
					pda: {
						seeds: [
							{
								kind: "const";
								value: [
									95,
									95,
									101,
									118,
									101,
									110,
									116,
									95,
									97,
									117,
									116,
									104,
									111,
									114,
									105,
									116,
									121,
								];
							},
						];
					};
				},
				{
					name: "program";
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
			name: "encryptedLog";
			discriminator: [245, 134, 158, 26, 243, 176, 234, 1];
		},
	];
	types: [
		{
			name: "encryptedLog";
			type: {
				kind: "struct";
				fields: [
					{
						name: "data";
						type: "bytes";
					},
				];
			};
		},
	];
};
