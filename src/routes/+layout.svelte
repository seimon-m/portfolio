<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/reset.css';
</script>

<Header />

<slot />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;500;700&family=Raleway:wght@100;200;300;600;700&display=swap');

	:global(html) {
		font-size: 16px;
		/* font-size: calc(60% + 0.8vmin); */

		/* font-size: calc(16px + (30 - 21) * ((100vw - 768px) / (1600 - 768))); */

		/* font-size: calc(12px + (24 - 12) * ((100vw - 400px) / (800 - 400))); */

		/* font-size: calc(10px + 0.390625vw); */
		/* font-size: calc(0.08em + 1.5vw); */
	}

	/* @media screen and (min-width: 320px) {
		:global(html) {
			font-size: calc(16px + 6 * ((100vw - 320px) / 680));
		}
	}
	@media screen and (min-width: 1000px) {
		:global(html) {
			font-size: 22px;
		}
	} */

	:global(body) {
		font-family: 'Raleway', sans-serif;
		margin: 0;
	}

	:global(h1) {
		font-family: 'Cormorant Garamond', serif;
		font-style: normal;
		font-weight: 500;
		font-size: 11.25rem;
		font-size: clamp(50px, calc(30px + 10vw), 180px);
	}

	:global(h2) {
		font-family: 'Raleway', sans-serif;
		font-style: normal;
		font-weight: 700;
		font-size: 6rem;
	}

	:global(h3) {
		font-family: 'Cormorant Garamond', serif;
		font-style: normal;
		font-weight: 300;
		font-size: 6rem;
	}

	:global(h4) {
		font-family: 'Raleway', sans-serif;
		font-style: normal;
		font-weight: 200;
		font-size: 2.5rem;
	}

	:global(h5) {
		font-family: 'Raleway', sans-serif;
		font-style: normal;
		font-weight: 100;
		font-size: 1.4rem;
	}

	:global(a) {
		font-family: 'Raleway', sans-serif;
		font-style: normal;
		font-weight: 100;
		/* font-size: 1.4rem; */
		font-size: clamp(10px, calc(10px + 1vw), 180px);
	}

	:global(p) {
		font-family: 'Raleway', sans-serif;
		font-style: normal;
		font-weight: 100;
		font-size: 1rem;
	}
</style>
