<script lang="ts">
    import Header from "$components/Header.svelte";



	let {children, data} = $props();
</script>

<style>
	:global(body) {
		width: 100vw;
		height: 100vh;

		margin: 0;
	}

	main {
		/* TODO: fix units. */
		padding: 16px;
	}
</style>



<Header />



<main>
	{@render children()}
</main>



<svelte:head>
	<title>{data.pageTitle}</title>
</svelte:head>
