<script>
	import Header from '$lib/components/Header.svelte';
</script>

<main>
	<Header />
	<slot />
	<footer>
		<p>© {new Date().getFullYear()}</p>
		<p>Designed and built by Simon Müller</p>
	</footer>
</main>

<style>
	main {
		background-color: var(--white);
		padding: 1vh 1vw;
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0.5rem 0;
		color: var(--primary-100);
		mix-blend-mode: difference;
	}
</style>
