import type {WikiPageMetadata} from "$lib/types.js";



export const staticPageRegistry = import.meta.glob("/src/lib/wiki/*.svelte", {
	eager: true,
	import: "metadata"
}) as Record<string, WikiPageMetadata>;
