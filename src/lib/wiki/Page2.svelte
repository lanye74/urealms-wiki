<script module lang="ts">
	import ExampleWikiPage from "$wiki/ExampleWikiPage.svelte";

	import type {WikiPageMetadata} from "$lib/types.js";



	export const metadata: WikiPageMetadata = {
		title: "page 2!"
	};
</script>



<ExampleWikiPage>
	{#snippet wikiBody()}
		<h1>this one is page 2</h1>

		<p>don't get 'em mixed up!</p>

		<p>this is a dynamically loaded page!</p>
	{/snippet}
</ExampleWikiPage>
