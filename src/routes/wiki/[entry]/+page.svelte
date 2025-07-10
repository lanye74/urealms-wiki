<script lang="ts">
	import {onMount, type Component} from "svelte";

	const {data} = $props();
	const pageEntry = $derived(data.page);



	// TODO: WHY
	type ComponentModule = {
		default: Component
	};



	let PageComponent: Component | undefined = $state();


	// TODO: make this re-run on page change
	onMount(async () => {
		try {
			// TODO: ughudfghjdgdfhkgdfhgjkdfhgjkdhk
			// genuinely what the fuck
			const module = await import(pageEntry as `../../../lib/wiki/*.svelte`) as ComponentModule;
			PageComponent = module.default;
		} catch (e) {
			console.error(e);
		}
	});
</script>



<!-- since Component is undefined at first, if i try to render it it freaks out.
     why??? how to fix?? this didn't happen with svelte:component -->
{#if PageComponent}
	<PageComponent></PageComponent>
{/if}
