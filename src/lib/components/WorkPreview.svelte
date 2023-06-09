<script>
	export let project;
</script>

<a class="container" href="/{project.url}">
	<img src={project?.image} alt="random" />
	<div class="text">
		<h4 class="heading">{project.title}</h4>
		<h5 class="tags">{project.tags}</h5>
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

	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0.7rem 1rem;
	}

	.heading {
		line-height: 1.9rem;
		margin-bottom: 0.8rem;
	}

	.tags {
		font-size: 1rem;
		padding: 0.1rem 0.6rem;
		border: 1px solid black;
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
