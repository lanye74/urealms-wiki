<script lang="ts">
    import type {Snippet} from "svelte";



	type Props = {
		wikiBody: Snippet;
		// TODO: scaffold out other elements
		// asideBox?: Snippet;
	};

	let {wikiBody}: Props = $props();
</script>

{@render wikiBody()}

<!-- {@render asideBox?.()} -->
