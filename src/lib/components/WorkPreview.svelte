<script>
	export let project;
</script>

<a class="container" href="/{project.title.replaceAll(' ', '-')}">
	{#if project.images}
		<img src={project?.images?.image0} alt="random" />
	{:else}
		<img src={'https://picsum.photos/250/350'} width="600" height="400" alt="random" />
	{/if}

	<div class="description">
		<h4 class="heading">{project.title}</h4>
	</div>
</a>

<style>
	:root {
		--underline-intrinsic-width: 8;
		--underline-width: 12;
		--underline-color: #ffffff;
		--underline-cap-width: 4px;
		--underline-offset-y: -2px;
		--underline-padding-x: 0.12em;
		--text-color: #000000;
	}
	.container {
		/* background-color: antiquewhite; */
		position: relative;
		height: 24rem;
		min-width: 300px;
		transition: all 0.6s ease;
	}

	.container:hover {
		transform: scale(1.05);
		--text-color: #ffffff;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.description {
		background-color: var(--tertiary-100);
		padding: 0.9em;
		position: absolute;
		left: 0px;
		bottom: 0px;
		text-align: right;
		width: auto;
		float: right;
	}

	.heading {
		color: var(--text-color);
	}

	h4 {
		color: var(--text-color);
		line-height: 0.8em;
	}

	a:hover {
		border-radius: 0;
	}
</style>
