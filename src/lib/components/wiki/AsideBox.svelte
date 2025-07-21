<script lang="ts">
	import type {Snippet} from "svelte";



	// TODO: refactor
	type AsideBoxImageProps = {
		src: string;
		alt: string;
	};

	type Props = {
		children?: Snippet;
		image?: AsideBoxImageProps;
	};



	let {children}: Props = $props();
</script>



<section class="aside-box">
	<!-- TODO: image logic here, when i actually Make This Do Somethig -->
	{@render children?.()}
</section>
