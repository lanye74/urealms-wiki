<script lang="ts">
    // import WikiBody from "$components/wiki/elements/WikiBody.svelte";
    import type {Snippet} from "svelte";

	type Props = {
		// TODO: can i force wikiBody to be a WikiBody with types?
		wikiBody: Snippet;
	};

	let {wikiBody}: Props = $props();
</script>

{@render wikiBody()}
