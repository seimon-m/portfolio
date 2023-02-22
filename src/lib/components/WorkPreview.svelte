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

	a {
		border: 0;
		margin: 0;
		padding: 0;
		/* background-color: var(--primary-100); */
	}
</style>
