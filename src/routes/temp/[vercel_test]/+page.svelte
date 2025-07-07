<script lang="ts">
	const {data} = $props();
</script>

<p>blugh</p>


{#await data.currentPage}
	<p>loading current page...</p>
{:then value}
	<p>current page: {value}</p>
{/await}
