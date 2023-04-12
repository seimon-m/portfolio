<script>
	import Header from '$lib/components/Header.svelte';
</script>

<main>
	<Header />
	<slot />
</main>

<style>
	main {
		background-color: var(--white);
		padding: 2vh 2vw;
	}
</style>
