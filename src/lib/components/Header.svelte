<script lang="ts">

</script>

<style>
	header {
		width: 100%;
		height: 12vh;

		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;

		/* TODO: fix the units. */
		padding: 16px;
		box-sizing: border-box;

		border-bottom: 1px solid #ccc;
	}

	img {
		height: 100%;
	}
</style>

<header>
	<!-- TODO: funny alt text needs to be replaced -->
	<!-- TODO: also: investigate importing image in script tag -->
	<img src="/assets/Newrealms.png" alt="bitch">

	<nav>
		<a href="/">Home</a>
		<a href="/search">Search</a>

		<a href="/wiki/Page1">Wiki Page 1</a>
		<a href="/wiki/Page2">Wiki Page 2</a>
	</nav>
</header>
