<script>
	export let project;
</script>

<a class="container" href="/{project.title.replaceAll(' ', '-')}">
	<div class="flex-wrapper">
		{#if project.images}
			<img src={project?.images?.image0} alt="random" />
		{:else}
			<img src={'https://picsum.photos/250/350'} width="600" height="400" alt="random" />
		{/if}
		<div class="text">
			<h4 class="heading">{project.title}</h4>
			<h5 class="tags">{project.tags}</h5>
		</div>
	</div>
	<hr />
</a>

<style>
	.container {
		height: fit-content;
		position: relative;
		margin-bottom: 1.3rem;
		overflow: hidden;
	}

	.container:hover {
		opacity: 0.85;
	}

	img {
		width: 100%;
		aspect-ratio: 3 / 1.95;
		object-fit: cover;
	}

	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0.8rem 0rem;
	}

	.heading {
		line-height: 1.9rem;
		margin-bottom: 0.8rem;
	}

	a {
		border: 0;
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
</style>
