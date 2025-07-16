import getTitle from "$utils/title.js";



// TODO: what work needs to be done to make this non-blocking?
// also TODO: this pattern of *the server loading the page title for the client*
// frankly feels really bad and i think i should kill myself
// or find a better way to do it.
export async function load({url}) {
	const pageTitle = getTitle(url.pathname);



	return {
		pageTitle
	};
}
