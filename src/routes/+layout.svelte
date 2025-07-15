<script lang="ts">
	import {page} from "$app/state";

	import getTitle from "$utils/title.js";



	const {children} = $props();
</script>



<svelte:head>
	<title>{getTitle(page.url.pathname)}</title>
</svelte:head>



<nav>
	<a href="/">Home</a>
	<a href="/search">Search</a>

	<a href="/wiki/Page1">Wiki Page 1</a>
	<a href="/wiki/Page2">Wiki Page 2</a>
</nav>



{@render children()}
