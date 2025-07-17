<script lang="ts">
	import Header from "$components/Header.svelte";

	import "$lib/styles/global.css";



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
