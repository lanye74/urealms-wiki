<script lang="ts">
	let {data} = $props();
</script>



{#await data.page}
	<p>Loading page...</p>
{:then WikiPageImport}
	<WikiPageImport.default />
{/await}
