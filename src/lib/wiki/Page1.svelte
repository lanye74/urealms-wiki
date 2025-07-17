<script module lang="ts">
	import WikiPage from "$wiki/WikiPage.svelte";
    import WikiBody from "$wiki/elements/WikiBody.svelte";

	import type {WikiPageMetadata} from "$lib/types.js";



	export const metadata: WikiPageMetadata = {
		// TODO: add support for route name?
		// ...this would take me completing the page-indexing step, i think
		// TODO: rename field to "pageTitle"
		pageTitle: "page 1."
	};
</script>



<WikiPage>
	{#snippet wikiBody()}
	<WikiBody>
		<h1>hello and welcome to page 1</h1>

		<p>stay a while.</p>

		<p>this is a dynamically loaded page!</p>
	</WikiBody>
	{/snippet}
</WikiPage>
