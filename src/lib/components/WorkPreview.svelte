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
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: space-between;
	}

	img {
		width: 100%;
		aspect-ratio: 3 / 1.95;
		object-fit: cover;
		border-radius: 10px;
		display: inline-block;
		width: 90%;
		z-index: 1;
	}

	h3 {
		font-size: 45px;
		font-weight: 500;
		padding-bottom: 1rem;
		padding-left: 1rem;
		line-height: 90%;
	}

	.text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: -8.2rem 0 0 0;
		padding: 9rem 1rem 0rem 0rem;
		width: 90%;
		background-color: var(--secondary-100);
		margin-left: auto;
		border-radius: 10px;
	}

	.tags {
		position: absolute;
		right: 0.3rem;
		top: 5rem;
		transform-origin: bottom right;
		transform: rotate(-90deg);
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
