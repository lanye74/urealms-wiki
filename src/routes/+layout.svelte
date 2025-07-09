<script lang="ts">
	import {page} from "$app/state";

	import getTitle from "$utils/title.js";



	const {children} = $props();
</script>



<svelte:head>
	<title>{getTitle(page.route.id)}</title>
</svelte:head>



<nav>
	<a href="/">Home</a>
	<a href="/search">Search</a>
</nav>


{@render children()}
