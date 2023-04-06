<script>
	export let project;
</script>

<a class="container" href="/{project.title.replaceAll(' ', '-')}">
	{#if project.images}
		<img src={project?.images?.image0} alt="random" />
	{:else}
		<img src={'https://picsum.photos/250/350'} width="600" height="400" alt="random" />
	{/if}

	<h4 class="heading">{project.title}</h4>
	<!-- <div class="description">
		<h4 class="heading">{project.title}</h4>
		{project.title}
	</div> -->
</a>

<style>
	.container {
		display: block;
		position: relative;
		height: auto;
		aspect-ratio: 3 / 1.95;
		border: none;
		transition: all 0.6s ease;
		text-decoration: none;
		margin-bottom: 1.3rem;
		border-radius: 10px;
		overflow: hidden;
	}

	.container::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.8) 0%,
			rgba(0, 0, 0, 0.2) 20%,
			rgba(0, 0, 0, 0) 100%
		);
	}

	.container:hover {
		opacity: 0.85;
	}

	/* .container:hover {
		box-shadow: 0.2px 0.2px 0.3px hsl(270deg 29% 50% / 0.4),
			0.7px 0.6px 0.9px -0.4px hsl(270deg 29% 50% / 0.37),
			1.3px 1px 1.6px -0.8px hsl(270deg 29% 50% / 0.35),
			2.1px 1.6px 2.5px -1.2px hsl(270deg 29% 50% / 0.32),
			3.4px 2.6px 4.1px -1.6px hsl(270deg 29% 50% / 0.3),
			5.4px 4.1px 6.5px -2px hsl(270deg 29% 50% / 0.27),
			8.2px 6.2px 9.8px -2.4px hsl(270deg 29% 50% / 0.25),
			12px 9.2px 14.4px -2.8px hsl(270deg 29% 50% / 0.22),
			17.1px 13px 20.5px -3.2px hsl(270deg 29% 50% / 0.2),
			23.5px 18px 28.2px -3.6px hsl(270deg 29% 50% / 0.17);
		--text-color: #ffffff;
		background-color: var(--tertiary-100);
	} */

	img {
		width: 100%;
		aspect-ratio: 3 / 1.95;
		object-fit: cover;
	}

	.heading {
		position: absolute;
		bottom: 10%;
		right: 10%;
		font-size: 3em;
		font-weight: 600;
		color: #ffffff;
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
		z-index: 1;
		line-height: 0.9em;
		width: fit-content;
		text-align: end;
	}

	a {
		border: 0;
		margin: 0;
		padding: 0;
	}
</style>
