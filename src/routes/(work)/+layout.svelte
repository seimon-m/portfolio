<script>
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
