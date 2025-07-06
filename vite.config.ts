import {defineConfig} from "vite";

import {sveltekit as pluginSvelteKit} from "@sveltejs/kit/vite";



export default defineConfig(_args => {
	return {
		plugins: [pluginSvelteKit()]
	}
});
