import resolvePageComponent from "$utils/pageResolver.js";



// TODO: this may be able to be a +page.ts file; investigate

export async function load({params}) {
	const pageRequest = params.entry;

	console.log(pageRequest)

	return {
		page: resolvePageComponent(pageRequest)
	};
}
