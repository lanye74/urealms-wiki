export function load({params}) {
	console.log(params.vercel_test);

	const sleep = async (ms: number) => new Promise(res => setTimeout(res, ms));

	return {
		currentPage: sleep(500).then(() => params.vercel_test)
	}
}
