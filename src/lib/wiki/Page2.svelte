<script module lang="ts">
	import ExampleWikiPage from "$components/wiki/ExampleWikiPage.svelte";
	import WikiBody from "$components/wiki/elements/WikiBody.svelte";

	import type {WikiPageMetadata} from "$lib/types.js";



	export const metadata: WikiPageMetadata = {
		title: "page 2!"
	};
</script>



<ExampleWikiPage>
	<!-- TODO: reduce redundancy -->
	{#snippet wikiBody()}
		<WikiBody>
			<h1>this one is page 2</h1>

			<p>don't get 'em mixed up!</p>

			<p>this is a dynamically loaded page!</p>
		</WikiBody>
	{/snippet}
</ExampleWikiPage>
