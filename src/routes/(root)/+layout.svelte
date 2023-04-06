<script>
	import Header from '$lib/components/Header.svelte';
</script>

<main>
	<Header />
	<slot />
</main>

<style>
	main {
		background-color: aqua;
		padding: 2vh 2vw;
	}
</style>
