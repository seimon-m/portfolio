<script>
	import '$lib/styles/reset.css';
	import '$lib/styles/global.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<main>
	<slot />
</main>
