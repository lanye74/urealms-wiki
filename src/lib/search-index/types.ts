type StringArrayIndex = {
	line: number; // TODO: remember why i made these nullable, once
	char: number;
};



export type CommentMarker = {
	type: "start" | "end";
} & StringArrayIndex;



export type MultilineStringRange = {
	start: StringArrayIndex;
	end: StringArrayIndex;
};
