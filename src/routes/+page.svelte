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
		height: 82vh;
		display: flex;
		justify-content: center;
		align-items: center;
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
