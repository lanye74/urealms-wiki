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
<!-- multi-line comment marker
  -->
<!-- single line comment to be stripped -->

<WikiPage>
	{#snippet wikiBody()}
	<!-- TODO: i remembered why i re-added redundancy. it's so that i can actually.
	     pass props to the components. like for AsideBox. -->
	<WikiBody>
		<h1>hello and welcome to page 1</h1>

		<p>stay a while.</p>

		<p>this is a dynamically loaded page!</p>
	</WikiBody>
	{/snippet}
</WikiPage>
