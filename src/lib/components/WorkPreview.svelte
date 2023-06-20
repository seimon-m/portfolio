<script>
	export let project;
</script>

<a class={($$restProps.class || '') + ' container'} href="/{project.url}">
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
		/* align-items: space-between; */
	}

	img {
		aspect-ratio: 3 / 1.95;
		object-fit: cover;
		border-radius: 10px;
		display: inline-block;
		width: 90%;
		z-index: 1;
		max-height: 90vh;
	}

	h3 {
		font-size: 45px;
		font-weight: 500;
		padding-bottom: 1rem;
		padding-left: 1rem;
		line-height: 90%;
		hyphens: auto;
		word-break: break-word;
		word-wrap: break-word;
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
		box-shadow: 0px 3px 6px rgba(24, 24, 27, 0.02), 0px 2px 7px rgba(24, 24, 27, 0.04),
			0 0 0 1px rgba(62, 45, 81, 0.1);
	}

	img:hover + .text,
	.text:hover {
		box-shadow: 0px 3px 6px rgba(24, 24, 27, 0.05), 0px 8px 15px rgba(24, 24, 27, 0.1),
			0 0 0 1px rgba(62, 45, 81, 0.15);
	}

	img:has(~ .text:hover),
	img:hover {
		box-shadow: 0px 3px 6px rgba(24, 24, 27, 0.05), 0px 8px 15px rgba(24, 24, 27, 0.1),
			0 0 0 1px rgba(62, 45, 81, 0);
	}
	.tags {
		position: absolute;
		right: 2%;
		bottom: 12rem;
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

	@media only screen and (min-width: 768px) {
		.container {
			grid-column: span 1;
			/* height: 20fr; */
		}

		.first {
			grid-column: 1 / -1;
		}

		.first > img {
			width: 100%;
		}

		.first > .text {
			flex-direction: row;
			width: 95%;
			align-items: center;
		}

		.first > .text > .tags {
			position: unset;
			transform-origin: bottom right;
			margin-bottom: 0.7rem;
			padding: 0.2rem 0.5rem;
			transform: rotate(0deg);
			font-size: 1rem;
			border: 1px solid var(--secondary-100);
			border-radius: 50px;
		}

		img {
			width: 90%;
		}

		.tags {
			right: 1%;
		}
	}

	@media only screen and (min-width: 992px) {
		img {
			width: 93%;
		}
	}
	@media only screen and (min-width: 1400px) {
		img {
			width: 94%;
		}
	}
	@media only screen and (min-width: 2000px) {
		img {
			width: 95%;
		}
	}
</style>
