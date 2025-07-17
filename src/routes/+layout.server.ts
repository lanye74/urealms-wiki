import getPageTitle from "$utils/getPageTitle.js";



// TODO: i still don't like this pattern but i've gotta get over myself
// TODO: could the client just have a lazy-loaded metadata glob import?
// better yet: the client just imports the Whole Module, which would be sane i think
export async function load({url}) {
	// could put a `depends()` here, if i ever want to
	// be able to force the server to regenerate the page title

	return {
		pageTitle: getPageTitle(url.pathname)
	};
}
