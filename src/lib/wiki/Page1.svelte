<script module lang="ts">
    import ExampleWikiPage from "$components/wiki/ExampleWikiPage.svelte";
	import WikiBody from "$components/wiki/elements/WikiBody.svelte";

	import type {WikiPageMetadata} from "$lib/types.js";



	export const metadata: WikiPageMetadata = {
		title: "page 1."
	};
</script>



<ExampleWikiPage>
	<!-- TODO: reduce redundancy -->
	{#snippet wikiBody()}
		<WikiBody>
			<h1>hello and welcome to page 1</h1>

			<p>stay a while.</p>

			<p>this is a dynamically loaded page!</p>
		</WikiBody>
	{/snippet}
</ExampleWikiPage>
