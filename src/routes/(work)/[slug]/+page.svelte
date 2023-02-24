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
		position: relative;
	}
	.infos::-webkit-scrollbar {
		width: 10px;
	}

	.infos::-webkit-scrollbar-track {
		background: var(--primary-100);
	}

	.infos::-webkit-scrollbar-thumb {
		background-color: var(--tertiary-100);
		border-radius: 20px;
	}

	.infos {
		position: sticky;
		top: 12vh;
		height: 88vh;
		overflow-y: auto;

		/* Scrollbar styling for Firefox */
		scrollbar-color: var(--tertiary-100) var(--primary-100);
		scrollbar-width: thin;
		scrollbar-gutter: stable;
	}

	.infos > p {
		margin-top: 4vh;
		margin-bottom: 2em;
		margin-right: 1em;
		text-align: justify;
		text-align-last: none;
		hyphens: auto;
	}

	.infos > h2 {
		margin-top: 0.5em;
	}

	.images {
		position: relative;
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
		z-index: 10;
	}

	@media screen and (min-width: 80em) {
		.wrapper {
			flex-direction: row;
		}

		.infos {
			width: 40vw;
			height: 85vh;
		}

		.images {
			width: 60vw;
			transform: translate(2.5%, 0);
		}
	}
</style>
