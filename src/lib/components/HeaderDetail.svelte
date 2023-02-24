<script>
	import arrow from '$lib/assets/arrow.svg';
</script>

<div class="header">
	<div class="wrapper">
		<h5>Portfolio Simon Müller</h5>
		<a class="button" href="/#work">
			<p>works</p>
			<img src={arrow} alt="an arrow" />
		</a>
	</div>
</div>

<style>
	.header {
		position: relative;
		display: flex;
		height: 12vh;
		justify-content: center;
		background-color: var(--primary-100);
		top: 0;
		position: sticky;
		z-index: 2;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		width: 95%;
		height: 100%;
	}

	h5 {
		padding-top: 10px;
	}

	.button {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		width: 100px;
		height: 30px;
		border: 1px solid var(--pure-black);
		border-radius: 26px;
		padding-left: 1em;
		padding-right: 1em;
		text-decoration: none;
		min-height: 25px;
		margin: 0;
	}

	.button > img {
		width: 37px;
	}
	.button > p {
		text-align: center;
		margin: auto 0 auto 0;
	}

	.button:hover {
		background-color: var(--secondary-100);
	}
</style>
