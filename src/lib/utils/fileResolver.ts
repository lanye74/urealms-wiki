type ResolvedWikiFile<T extends string> = `/src/lib/wiki/${T}.svelte`;

export function resolveWikiFile<T extends string>(filename: T): ResolvedWikiFile<T> {
	return `/src/lib/wiki/${filename}.svelte`;
}
