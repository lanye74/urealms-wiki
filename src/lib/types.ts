import type {Component} from "svelte";



export type WikiPageImport = {
	default: Component;
	metadata: WikiPageMetadata;
};



export type WikiPageMetadata = {
	pageTitle: string;
};
