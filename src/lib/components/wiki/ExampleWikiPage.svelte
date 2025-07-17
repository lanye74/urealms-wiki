<script lang="ts">
	import type {Snippet} from "svelte";

	import WikiBody from "$wiki/elements/WikiBody.svelte";



	type Props = {
		wikiBody: Snippet;
		// TODO: scaffold out other elements
		// asideBox?: Snippet;
	};

	let {wikiBody}: Props = $props();
</script>



<WikiBody>
	{@render wikiBody()}
</WikiBody>

<!-- {#if asideBox}
	<AsideBox>
		{@render asideBox()}
	</AsideBox>
{/if} -->
