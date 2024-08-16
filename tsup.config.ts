import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	splitting: false,
	sourcemap: "inline",
	clean: true,
	noExternal: [/(.*)/],
	legacyOutput: true,
});
