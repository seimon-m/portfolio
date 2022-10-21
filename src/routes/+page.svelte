<script>
	import '$lib/styles/global.css';
	import WorkPreview from '../lib/components/WorkPreview.svelte';
	import work from '$lib/data/work.json';
</script>

<div class="container">
	<div class="content">
		<div class="start">
			<h1>Media artist, <br />Coder and <br /> Designer</h1>
		</div>
		<div class="section work">
			<h2 class="section-title">work</h2>
			{#each work as { title, tags }, index}
				<WorkPreview {title} {tags} />
			{/each}
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
		height: 80vh;
	}

	.section {
		position: relative;
	}

	.section-title {
		position: absolute;
		top: 90px;
		left: -80px;
		transform: rotate(-90deg);
		z-index: 1;
		text-align: right;
	}
</style>
