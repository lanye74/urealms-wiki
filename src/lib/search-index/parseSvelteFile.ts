// TODO: probably refactor these regexes
const lineDelimiterRegex = /\r?\n|\r|\n/g;
const leadingTabsThenSpacesRegex = /^[\t]+[ ]*/;



// TODO: name this more specifically, when i figure out a flow of events
export default function parseSvelteFile(fileContent: string) {
	const lines = fileContent.split(lineDelimiterRegex);


	const trimmedLines = lines
		.map(line => line.trim())
		.filter(line => line !== "")
		.map(line => line.replace(leadingTabsThenSpacesRegex, ""))


	const wikiExtractedLines = extractWikiLines(trimmedLines);
	const commentStrippedLines = stripHTMLComments(wikiExtractedLines);

	// TODO: i'm realizing, now, that i may have to parse svelte markup too
	// we're... gonna worry about that if it comes to it


	return commentStrippedLines;
}



// this method only operates on lines that start with the content,
// which is fine. i don't care that much about ignoring false positives in comments.
function extractWikiLines(lines: string[]) {
	// skip forward a line, we don't care about the tag itself
	let startIndex = lines.findIndex(line => line.startsWith("<WikiPage>")) + 1;
	// presumably this saves a few CPU cycles, to go in reverse
	let endIndex = lines.findLastIndex(line => line.startsWith("</WikiPage>")) - 1;

	const extractedLines = lines.slice(startIndex, endIndex + 1);


	return extractedLines;
}



function stripHTMLComments(lines: string[]) {
	// TODO: do i really like this verbose approach? meh
	const outputLines: string[] = [];

	let commentRanges: CommentMarker[] = [];



	for(const [_lineIndex, line] of Object.entries(lines)) {
		for(const charIndex of allSubstringIndices(line, "<!--")) {
			commentRanges.push({
				type: "start",
				char: charIndex,
				line: parseInt(_lineIndex)
			});
		}


		for(const charIndex of allSubstringIndices(line, "-->")) {
			commentRanges.push({
				type: "end",
				char: charIndex + 3, // charIndex is start of comment, +3 to reach end
				line: parseInt(_lineIndex)
			});
		}
	}

	// TODO: figure out how to turn CommentMarker[]
	// into MultilineStringRange[] of content to cut out
	// !!!!!
	console.log(commentRanges);


	return outputLines;
}



function allSubstringIndices(string: string, substring: string) {
	const output: number[] = [];

	if(!string.includes(substring)) {
		return output;
	}


	for(let i = 0; i < string.length; i++) {
		let substringIndex = string.indexOf(substring, i);

		if(substringIndex === -1 || output.includes(substringIndex)) {
			continue;
		}


		output.push(substringIndex);
	}

	return output;
}



// TODO: jglsjgkljljsklfjsgsgskldgklsdjgsdjggsgsdgssdgbk
// TODO: refactor
type StringArrayIndex = {
	line: number | null;
	char: number | null;
};



type CommentMarker = {
	type: "start" | "end";
} & StringArrayIndex;



type MultilineStringRange = {
	start: StringArrayIndex;
	end: StringArrayIndex;
};
