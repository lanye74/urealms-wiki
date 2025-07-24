export const regexes = {
	isWikiFile: /src\/lib\/wiki\/.+\.svelte$/,
	delimitLine: /\r?\n|\r|\n/g,
	// this was named "tabspace" as a pun on "whitespace",
	// but it also happens to match tabs and spaces. funny
	leadingTabspace: /^([\t]|[ ])*/
};



export function allSubstringIndices(string: string, substring: string) {
	const output: number[] = [];

	// TODO: there's probably an optimization where i use indexOf here,
	// add it to the output, then start the for-loop from just after it
	// worry about it later
	if(!string.includes(substring)) {
		return output;
	}


	// TODO: this probably can be made more idiomatic
	for(let i = 0; i < string.length; i++) {
		let substringIndex = string.indexOf(substring, i);

		// don't add dupes, or misses
		if(output.includes(substringIndex))	continue;
		if(substringIndex === -1) break;

		output.push(substringIndex);
	}


	return output;
}
