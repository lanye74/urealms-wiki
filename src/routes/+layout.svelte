<script lang="ts">
	import getTitle from "$util/title.js";
	import {page} from "$app/state";

	const {children} = $props();
</script>



<svelte:head>
	<title>{getTitle(page.route.id)}</title>
</svelte:head>



{@render children()}
