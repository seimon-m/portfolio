<script>
    const { data } = $props();
</script>

<svelte:head>
    <title>{data.title} — Simon Müller</title>
</svelte:head>

<data.Component></data.Component>
