// import fs from "node:fs/promises";



// TODO: this can be worked on again, with the new glob pattern
// maybe the server can eagerly load the files and search happens on-server?
export const actions = {
	search: async ({request}) => {
		const formData = await request.formData();
		const searchQuery = formData.get("search");

		// const routesTree = await fs.readdir("src/routes", {
		// 	withFileTypes: true,
		// 	recursive: true
		// });

		// console.log(routesTree);



		return {
			searchResults: [
				{text: "hey!"},
				{text: "heya!"},
				{text: "heyo!"},
			]
		};
	}
};
