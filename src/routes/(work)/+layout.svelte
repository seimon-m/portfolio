<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	import HeaderDetail from '$lib/components/HeaderDetail.svelte';
</script>

<HeaderDetail />
<main>
	<slot />
</main>

<style>
	main {
		margin-left: auto;
		margin-right: auto;
		width: 95%;
	}
</style>
