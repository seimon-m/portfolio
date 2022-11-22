<script>
	export let project;
</script>

<a class="container" href="/work/{project.title.replaceAll(' ', '-')}">
	<img src={'https://picsum.photos/250/350'} width="300" height="350" alt="random" />
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
		position: relative;
		height: 350px;
		width: 300px;
		margin-bottom: 2rem;
		margin-right: 3rem;
		transition: all 0.6s ease;
	}

	.container:hover {
		transform: scale(1.1);
		--underline-color: #000000;
		--text-color: #ffffff;
	}
	.description {
		position: absolute;
		top: 180px;
		left: 35px;
		text-align: right;
		width: 18rem;
		float: right;
	}

	.heading {
		color: var(--text-color);
		display: inline;
		--underline-width-scale: calc(var(--underline-width) / var(--underline-intrinsic-width));
		padding: 0
			calc(
				var(--underline-padding-x) + calc(var(--underline-cap-width) * var(--underline-width-scale))
			);
		box-decoration-break: clone;
		background-repeat: no-repeat;
		background-image: linear-gradient(180deg, var(--underline-color), var(--underline-color));
		background-position-x: calc(var(--underline-cap-width) * var(--underline-width-scale)), 0, 100%;
		background-position-y: calc(100% - var(--underline-offset-y) * -1);
		background-size: calc(
					100% - calc(var(--underline-cap-width) * var(--underline-width-scale) * 2)
				)
				calc(var(--underline-width) * 1px),
			auto calc(var(--underline-width) * 1px), auto calc(var(--underline-width) * 1px);
	}

	h3 {
		color: var(--text-color);
		margin-top: 1rem;
	}
</style>
