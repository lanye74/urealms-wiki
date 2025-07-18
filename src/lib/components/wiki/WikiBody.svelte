<script lang="ts">
	import type {Snippet} from "svelte";



	type Props = {children?: Snippet};

	let {children}: Props = $props();
</script>



<section class="wiki-body">
	{@render children?.()}
</section>
