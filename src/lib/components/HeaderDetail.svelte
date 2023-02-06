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
		display: flex;
		height: 13vh;
		justify-content: center;
		background-color: var(--primary-100);
		top: 0;
		position: sticky;
		padding-bottom: 2vh;
		z-index: -1;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		width: 95%;
	}

	h5 {
		padding-top: 10px;
	}

	.button {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-around;
		width: 100px;
		height: 30px;
		border: 1px solid var(--pure-black);
		border-radius: 26px;
		padding-left: 3vw;
		padding-right: 3vw;
		text-decoration: none;
		min-height: 25px;
	}

	.button > img {
		width: 37px;
	}
	.button > p {
		text-align: center;
		margin: auto 0 auto 0;
	}
</style>
