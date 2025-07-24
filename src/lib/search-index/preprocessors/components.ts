// TODO: this fucking sucks and i have to kill myself
export default function extractWikiComponents(inputLines: string[]): ExtractedWikiComponents {
	// TODO: add more components
	// goal: do this in a way that can be looped and easily extended
	// maybe some kind of schema to guide extracting sub-snippets, if any?

	// TODO: be more rigorous. check snippets
	const wikiBodyStart = inputLines.findIndex(line => line.includes("<WikiBody>"));
	const wikiBodyEnd = inputLines.findIndex(line => line.includes("</WikiBody>"));

	// TODO: error handling!!!!
	const wikiBodyContent = inputLines.slice(wikiBodyStart + 1, wikiBodyEnd);


	return {
		wikiBody: wikiBodyContent
	};
}



type ExtractedWikiComponents = {
	wikiBody: string[];
};
