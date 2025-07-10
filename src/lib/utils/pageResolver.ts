export default function resolvePageComponent(request: string) {
	// primitive; will eventually handle redirects
	// maybe there's a better way to type this such that vite is happier
	return `../../../lib/wiki/${request}.svelte`;
}
