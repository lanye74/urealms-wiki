<script lang="ts">
    import Header from "$components/Header.svelte";



	let {children, data} = $props();
</script>



<svelte:head>
	<title>{data.pageTitle}</title>
</svelte:head>



<Header />



{@render children()}
