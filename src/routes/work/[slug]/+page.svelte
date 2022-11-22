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

<h2>{currentProject.title}</h2>
<img src="" alt="" />
