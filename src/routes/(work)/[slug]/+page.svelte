<script>
	import { page } from '$app/stores';
	import workList from '$lib/data/work.json';

	let currentProjectTitle = $page.params.slug;
	let currentProject;

	workList.forEach((work) => {
		if (work.title == currentProjectTitle.replaceAll('-', ' ')) {
			currentProject = work;
			console.log(work);
		}
	});
	console.log(currentProject.images.image0);
</script>

<svelte:head>
	<title>{currentProject.title}</title>
</svelte:head>

<section>
	<img class="heroimage" src={currentProject.images.image0} alt="" />
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
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	img {
		width: 100%;
		/* margin-top: 1vh;
		z-index: 10; */
	}

	.heroimage {
		height: 400px;
		object-fit: cover;
		/* width: auto; */
	}

	.infos {
		margin: 1rem;
	}
	.infos > * {
		margin-bottom: 2rem;
	}

	/* .infos::-webkit-scrollbar {
		width: 10px;
	}

	.infos::-webkit-scrollbar-track {
		background: var(--primary-100);
	}

	.infos::-webkit-scrollbar-thumb {
		background-color: var(--tertiary-100);
		border-radius: 20px;
	} */

	.infos {
		/* position: sticky;
		top: 12vh;
		height: 88vh;
		overflow-y: auto; */

		/* Scrollbar styling for Firefox */
		/* scrollbar-color: var(--tertiary-100) var(--primary-100);
		scrollbar-width: thin;
		scrollbar-gutter: stable; */
	}

	.infos > p {
		/* margin-top: 4vh;
		margin-bottom: 2em;
		margin-right: 1em;
		text-align: justify;
		text-align-last: none;
		hyphens: auto; */
	}

	.infos > h2 {
		/* margin-top: 0.5em; */
	}

	.images {
		/* position: relative;
		display: flex;
		width: 100vw;
		flex-direction: column;
		transform: translate(-2.5%, 0);
		z-index: 10; */
	}

	h2 {
		/* overflow-wrap: break-word;
		background-color: transparent;
		padding-left: 0; */
	}

	/* 
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
	} */
</style>
