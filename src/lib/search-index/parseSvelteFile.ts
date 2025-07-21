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



// TODO: further parsing
function stripHTMLComments(lines: string[]) {
	// TODO: do i really like this verbose approach? meh
	const outputLines: string[] = [];

	for(const [_index, line] of Object.entries(lines)) {
		const lineIndex = parseInt(_index);

		if(line.startsWith("<!--") && line.endsWith("-->")) {
			continue;
		}


		outputLines.push(line);
	}

	return outputLines;
}
