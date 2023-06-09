<script>
	export let project;
</script>

<a class="container" href="/{project.url}">
	<img src={project?.image} alt="random" />
	<div class="text">
		<h3 class="heading">{project.title}</h3>
		<p class="tags">{project.tags}</p>
	</div>
</a>

<style>
	.container {
		height: fit-content;
		position: relative;
		background-color: var(--secondary-100);
		border-radius: 10px;
	}

	img {
		width: 100%;
		aspect-ratio: 3 / 1.95;
		object-fit: cover;
		border-radius: 10px;
	}

	h3 {
		font-size: 50px;
		font-weight: 500;
		padding-bottom: 0.5rem;
		line-height: 90%;
	}

	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0.7rem 1rem;
	}

	.heading {
		margin-bottom: 0.8rem;
	}

	.tags {
		font-size: 1rem;
		padding: 0.2rem 0.5rem;
		border: 1px solid var(--secondary-100);
		border-radius: 50px;
		width: fit-content;
	}

	a {
		border: 0;
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
</style>
