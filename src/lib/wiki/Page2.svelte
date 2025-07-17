<script module lang="ts">
	import WikiPage from "$wiki/WikiPage.svelte";
    import WikiBody from "$wiki/elements/WikiBody.svelte";

	import type {WikiPageMetadata} from "$lib/types.js";



	export const metadata: WikiPageMetadata = {
		pageTitle: "page 2!"
	};
</script>



<WikiPage>
	{#snippet wikiBody()}
	<WikiBody>
		<h1>this one is page 2</h1>

		<p>don't get 'em mixed up!</p>

		<p>this is a dynamically loaded page!</p>
	</WikiBody>
	{/snippet}
</WikiPage>
