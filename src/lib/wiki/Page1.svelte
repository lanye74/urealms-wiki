<script module lang="ts">
	import WikiPage from "$wiki/WikiPage.svelte";
    import WikiBody from "$wiki/WikiBody.svelte";

	import type {WikiPageMetadata} from "$lib/types.js";

	// TODO: figure out how to type this
	// @ts-ignore
	import {registry} from "virtual:search-index";



	export const metadata: WikiPageMetadata = {
		// TODO: add support for route name?
		// ...this would take me completing the page-indexing step, i think
		// TODO: rename field to "pageTitle"
		pageTitle: "page 1."
	};


	// console.log(registry);
</script>



<WikiPage>
	{#snippet wikiBody()}
	<!-- TODO: frankly, i forgot why i re-added redundancy... re-investigate -->
	<WikiBody>
		<h1>hello and welcome to page 1</h1>

		<p>stay a while.</p>

		<p>this is a dynamically loaded page!</p>
	</WikiBody>
	{/snippet}
</WikiPage>
