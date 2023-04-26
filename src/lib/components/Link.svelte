<script>
	export let href;
</script>

<a {href} target="_blank" rel="noreferrer">
	<slot />
</a>

<style>
	a {
		width: fit-content;
		text-decoration: underline;
		text-underline-offset: 0.3em;
		margin: 0.4em;
		padding: 0.3em 0 0.3em 0;
		height: 20px;
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		text-underline-offset: -1em;
	}
</style>
