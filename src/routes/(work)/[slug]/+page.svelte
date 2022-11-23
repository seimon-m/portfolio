<script>
	import { page } from '$app/stores';
	import workList from '$lib/data/work.json';
	import test from '$lib/assets/BA/Bild-WWWerkschau-1.jpg';


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

<h2>{currentProject.title}</h2>

{#if currentProject.images}
	{#each Object.values(currentProject.images) as image, index}
		<img src="{image}" alt="sdf" width="250" />
	{/each}
{/if}


