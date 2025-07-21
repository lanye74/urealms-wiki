import {defineConfig} from "vite";

import pluginDevTools from "vite-plugin-devtools-json";
import {sveltekit as pluginSvelteKit} from "@sveltejs/kit/vite";
import pluginViteInspect from "vite-plugin-inspect";
import pluginSearchIndex from "$utils/searchIndexPlugin.js";



export default defineConfig(_args => {
	return {
		plugins: [
			pluginSvelteKit(),
			pluginDevTools(),
			pluginViteInspect(),
			pluginSearchIndex()
		]
	};
});
