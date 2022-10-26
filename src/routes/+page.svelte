<script>
	import '$lib/styles/global.css';
	import WorkPreview from '$lib/components/WorkPreview.svelte';
	import work from '$lib/data/work.json';
	import About from '../lib/components/About.svelte';
</script>

<div class="container">
	<div class="content">
		<div class="start">
			<h1 class="start-title">Media artist, <br />Coder and <br /> Designer</h1>
			<div class="scroll-indicator">
				<p class="scroll-text">
					<span>scroll down</span>
				</p>
				<span style="z-index: 0;transform: matrix(1, 0, 0, 1, 0, 0);" />
			</div>
		</div>
		<div class="section work">
			<h2 class="section-title">work</h2>
			<div class="work-wrapper">
				{#each work as { title, tags }, index}
					<WorkPreview {title} {tags} />
				{/each}
			</div>
		</div>
		<div class="section about">
			<h2 class="section-title">about</h2>
			<About />
		</div>
	</div>
</div>

<style>
	.container {
		background-color: var(--primary-100);
		padding: 10vh 0vw;
		box-sizing: border-box;
		position: relative;
		display: flex;
		justify-content: center;
	}
	.content {
		position: relative;
		width: 85%;
		max-width: 1200px;
		height: 100%;
		box-sizing: border-box;
	}

	.start {
		position: relative;
		height: 83vh;
		display: flex;
		align-items: center;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 0;
		width: 100%;
		left: 0;
		z-index: 1;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.scroll-indicator > span {
		width: 2px;
		height: 59px;
		background-color: rgb(0, 0, 0);
		transform: scaleY(0);
		transform-origin: bottom center;
	}

	.scroll-text {
		margin-bottom: 5px;
		font-weight: 300;
	}

	.scroll-text > span {
		width: 100%;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 50%,
			rgb(0, 0, 0) 50%,
			rgb(0, 0, 0) 70%,
			rgba(172, 106, 172, 0) 60%
		);
		background-size: 0 100%;
		background-repeat: no-repeat;
		transition: 250ms linear;
	}

	.scroll-text > span:hover {
		background-size: 100% 100%;
	}

	.section {
		position: relative;
		margin-bottom: 10rem;
	}

	.section-title {
		position: absolute;
		z-index: 1;
		transform-origin: top left;
		left: 0;
		top: 0;
		transform: rotate(-90deg) translateX(-120%) translateY(-50%);
	}

	.start-title {
		margin-bottom: 15vh;
	}

	.work-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
