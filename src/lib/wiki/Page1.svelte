<script module lang="ts">
	import ExampleWikiPage from "$wiki/ExampleWikiPage.svelte";

	import type {WikiPageMetadata} from "$lib/types.js";



	export const metadata: WikiPageMetadata = {
		title: "page 1."
	};
</script>



<ExampleWikiPage>
	{#snippet wikiBody()}
		<h1>hello and welcome to page 1</h1>

		<p>stay a while.</p>

		<p>this is a dynamically loaded page!</p>
	{/snippet}
</ExampleWikiPage>
