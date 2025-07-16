<script lang="ts">
	let {children, data} = $props();
</script>



<svelte:head>
	<title>{data.pageTitle}</title>
</svelte:head>



<nav>
	<a href="/">Home</a>
	<a href="/search">Search</a>

	<a href="/wiki/Page1">Wiki Page 1</a>
	<a href="/wiki/Page2">Wiki Page 2</a>
</nav>



{@render children()}
