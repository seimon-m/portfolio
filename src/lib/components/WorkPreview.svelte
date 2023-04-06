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
		background-color: cadetblue;
		display: contents;
		position: relative;
		margin-bottom: 1.3rem;
		overflow: hidden;
		/* display: block;
		position: relative;
		height: auto;
		aspect-ratio: 3 / 1.95;
		border: none;
		transition: all 0.6s ease;
		text-decoration: none;
		margin-bottom: 1.3rem;
		border-radius: 10px;
		overflow: hidden; */
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
		min-height: 4rem;
		display: flex;
		line-height: 0.9em;
		flex-direction: column;
		justify-content: space-between;
		margin: 0.8rem 0rem;
		/* width: 100%; */
	}

	.heading {
		line-height: 1.5rem;
		margin-bottom: 0.8rem;
		/* position: absolute;
		bottom: 10%;
		right: 10%;
		font-size: 3em;
		font-weight: 600;
		color: #ffffff;
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
		z-index: 1;
		line-height: 0.9em;
		width: fit-content;
		text-align: end; */
	}

	a {
		border: 0;
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
</style>
