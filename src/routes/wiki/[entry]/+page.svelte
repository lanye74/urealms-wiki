<script lang="ts">
	const {data} = $props();

	let PageComponent = $derived(data.page.default);
</script>



<PageComponent />
