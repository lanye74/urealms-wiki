import type {Component} from "svelte";



export const staticPageRegistry = import.meta.glob("/src/lib/wiki/*.svelte", {
	eager: true
}) as Record<string, Component>;
