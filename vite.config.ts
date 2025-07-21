import {defineConfig} from "vite";

import pluginDevTools from "vite-plugin-devtools-json";
import {sveltekit as pluginSvelteKit} from "@sveltejs/kit/vite";
import pluginViteInspect from "vite-plugin-inspect";
// TODO: figure out!
import pluginSearchIndex from "./src/lib/search-index/plugin.js";



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
