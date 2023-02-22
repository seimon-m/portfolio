<script>
	import { page } from '$app/stores';
	import workList from '$lib/data/work.json';

	let currentProjectTitle = $page.params.slug;
	let currentProject;

	workList.forEach((work) => {
		if (work.title == currentProjectTitle.replaceAll('-', ' ')) {
			currentProject = work;
		}
	});
</script>

<svelte:head>
	<title>{currentProject.title}</title>
</svelte:head>

<div class="wrapper">
	<div class="infos">
		<h2>{currentProject.title}</h2>
		<p>{currentProject.abstract}</p>
	</div>
	<div class="images">
		{#if currentProject.images}
			{#each Object.values(currentProject.images) as image, index}
				<img src={image} alt="sdf" />
			{/each}
		{/if}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
	}

	.infos {
		margin-bottom: 4vh;
		top: 15vh;
		position: sticky;
	}

	.infos > p {
		margin-top: 4vh;
		text-align: justify;
		text-align-last: none;
		hyphens: auto;
	}

	.images {
		display: flex;
		width: 100vw;
		flex-direction: column;
		transform: translate(-2.5%, 0);
		z-index: 10;
	}

	h2 {
		overflow-wrap: break-word;
		background-color: transparent;
		padding-left: 0;
	}

	img {
		margin-top: 1vh;
	}

	@media screen and (min-width: 600px) {
		.wrapper {
			flex-direction: row;
		}

		.infos {
			width: 40vw;
			height: 100vh;
		}

		.images {
			width: 60vw;
			transform: translate(2.5%, 0);
		}
	}
</style>
