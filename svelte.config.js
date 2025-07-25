import adapter from "@sveltejs/adapter-vercel";
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";



/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		alias: {
			"$wiki": "src/lib/components/wiki/",
			"$components": "src/lib/components/",
			"$types": "src/lib/types/",
			"$utils": "src/lib/utils/",
		}
	}
};



export default config;
