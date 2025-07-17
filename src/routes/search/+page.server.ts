// import fs from "node:fs/promises";



// TODO: this can be worked on again, with the new glob pattern
// maybe the server can eagerly load the metada, and the search happens on-server?
// TODO: determine if i want to use this https://github.com/Hugos68/vite-plugin-pagefind
// or do it myself for the learning process :-)
// i think i want to make my own plugin and use the virtual: env
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
