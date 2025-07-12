import {browser} from "$app/environment";
import type {Component} from "svelte";



export const serverPageRegistry = browser === false ?
	import.meta.glob("/src/lib/wiki/*.svelte", {
		eager: true,
		import: "default" // TODO: make this "metadata", probably
	}) as Record<string, Component>

	: {}; // don't serve these to the client, ever



// TODO: to be honest, this really doesn't have to be a ternary because it's lazy loaded
// i can Just Set This To Be The Glob if i wanted
// but i like having the parity. i dunno man
export const clientPageRegistry = browser === true ?
	import.meta.glob("/src/lib/wiki/*.svelte", {
		eager: false,
		import: "default"
	}) as Record<string, () => Promise<Component>>

	: {};
