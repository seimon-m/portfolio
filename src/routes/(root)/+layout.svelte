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
		padding: 1vh 1vw;
	}
</style>
