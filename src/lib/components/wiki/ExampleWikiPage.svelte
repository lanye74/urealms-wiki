<script lang="ts">
    import WikiBody from "$components/wiki/elements/WikiBody.svelte";
    import type {Snippet} from "svelte";

	type Props = {
		// TODO: figure out typings
		wikiBody: Snippet;
	};

	let {wikiBody}: Props = $props();
</script>

{@render wikiBody()}
