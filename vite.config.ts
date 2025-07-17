import {defineConfig} from "vite";

import pluginDevTools from "vite-plugin-devtools-json";
// import pluginViteInspect from "vite-plugin-inspect";
import {sveltekit as pluginSvelteKit} from "@sveltejs/kit/vite";



export default defineConfig(_args => {
	return {
		plugins: [
			pluginSvelteKit(),
			pluginDevTools(),
			// pluginViteInspect()
		]
	}
});
