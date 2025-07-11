<script lang="ts">
	const {data} = $props();
</script>



{#await data.page}
	<p>Loading page...</p>
{:then PageComponent}
	<PageComponent />
{/await}
