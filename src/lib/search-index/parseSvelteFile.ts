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


	// TODO: strip style and script tags, before this
	const commentStrippedLines = removeHTMLComments(trimmedLines)


	return commentStrippedLines;
}



function removeHTMLComments(lines: string[]) {
	// TODO: do i really like this verbose approach? meh
	const outputLines: string[] = [];

	for(const [_index, line] of Object.entries(lines)) {
		const lineIndex = parseInt(_index);

		if(line.startsWith("<!--") && line.endsWith("-->")) {
			continue;
		}

		// TODO: further parsing
		outputLines.push(line);
	}

	return outputLines;
}

