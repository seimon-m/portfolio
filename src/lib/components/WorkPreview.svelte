<script>
	export let title, tags;
</script>

<div class="container">
	<img src={'https://picsum.photos/250/350'} width="250" height="350" alt="random" />
	<div class="description">
		<h4>{title}</h4>
		<h3>{tags}</h3>
	</div>
</div>

<style>
	.container {
		position: relative;
		height: 350px;
		margin-bottom: 2rem;
		margin-right: 6rem;
	}
	.description {
		position: absolute;
		top: 180px;
		left: 35px;
		text-align: right;
		width: 18rem;
		float: right;
	}
</style>
