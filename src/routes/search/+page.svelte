<script lang="ts">
	import {enhance} from "$app/forms";
    import type {SubmitFunction} from "@sveltejs/kit";




	const {form} = $props();



	// this is stupid frankly
	// TODO: decide if i should format this nicely or if its obfuscation is funnier
	const preventFormWipe: SubmitFunction = () => async ({update}) => update({reset: false});
</script>



<form use:enhance={preventFormWipe} method="POST" action="?/search">
	<input name="search" type="text">
	<button type="submit">go</button>
</form>

{#each form?.searchResults || [] as searchResult}
	<p>{searchResult.text}</p>
{/each}
