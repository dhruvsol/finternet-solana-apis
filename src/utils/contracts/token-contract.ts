/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/token_manager.json`.
 */
export type TokenManager = {
	address: "A5JxZVHgXe7fn5TqJXm6Hj2zKh1ptDapae2YjtXbZJoy";
	metadata: {
		name: "tokenManager";
		version: "0.1.0";
		spec: "0.1.0";
		description: "Created with Anchor";
	};
	instructions: [
		{
			name: "approve";
			discriminator: [69, 74, 217, 36, 115, 117, 97, 76];
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
			name: "detokenize";
			discriminator: [226, 140, 142, 169, 156, 155, 32, 176];
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
			name: "tokenize";
			discriminator: [138, 163, 95, 8, 237, 94, 174, 234];
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
			name: "updateAssetMetadata";
			discriminator: [217, 98, 205, 153, 242, 4, 41, 76];
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
			name: "updateAssetStatus";
			discriminator: [230, 38, 248, 210, 236, 202, 71, 253];
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
