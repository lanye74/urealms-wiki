export const regexes = {
	isWikiFile: /src\/lib\/wiki\/.+\.svelte$/,
	delimitLine: /\r?\n|\r|\n/g,
	// this was named "tabspace" as a pun on "whitespace",
	// but it also happens to match tabs and spaces. funny
	leadingTabspace: /^([\t]|[ ])*/
};



export function allSubstringIndices(string: string, substring: string) {
	const indices: number[] = [];
	let substringIndex = string.indexOf(substring);

	while(substringIndex !== -1) {
		indices.push(substringIndex);
		// we can skip to next match directly - no need to iterate each character
		substringIndex = string.indexOf(substring, substringIndex + 1);
	}


	return indices;
}
