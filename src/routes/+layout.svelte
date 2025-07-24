<script lang="ts">
	import "@fontsource-variable/funnel-sans";
	import "$lib/styles/global.css";

	import Header from "$components/Header.svelte";



	let {children, data} = $props();
</script>

<style>
	main {
		padding: 1rem;
	}
</style>



<Header />



<main>
	<!-- TODO: figure out how to properly use boundaries :-) -->
	<svelte:boundary>
		{@render children()}
	</svelte:boundary>
</main>



<svelte:head>
	<title>{data.pageTitle}</title>
</svelte:head>
