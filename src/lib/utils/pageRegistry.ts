import type {WikiPageMetadata} from "$lib/types.js";
import {resolveWikiFile} from "$utils/fileResolver.js";



export const staticPageRegistry = import.meta.glob(resolveWikiFile("*"), {
	eager: true,
	import: "metadata"
}) as Record<string, WikiPageMetadata>;
