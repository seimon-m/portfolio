<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/reset.css';
</script>

<Header />

<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500;700&family=Raleway:wght@100;200;300;600;700&display=swap');
	:global(body) {
		font-family: 'Raleway', sans-serif;
		background-color: #e1b9b9;
		margin: 0;
	}

	:global(h1) {
		font-family: 'Cormorant Garamond', serif;
		font-style: normal;
		font-weight: 500;
		font-size: 180px;
	}

	:global(h2) {
		font-family: 'Raleway', sans-serif;
		font-style: normal;
		font-weight: 700;
		font-size: 96px;
	}

	:global(h3) {
		font-family: 'Cormorant Garamond', serif;
		font-style: normal;
		font-weight: 300;
		font-size: 96px;
	}

	:global(h4) {
		font-family: 'Raleway', sans-serif;
		font-style: normal;
		font-weight: 200;
		font-size: 40px;
	}

	:global(h5) {
		font-family: 'Raleway', sans-serif;
		font-style: normal;
		font-weight: 100;
		font-size: 32px;
	}
</style>
