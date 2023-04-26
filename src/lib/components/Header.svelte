<script>
	import Button from './Button.svelte';
</script>

<div class="header">
	<div class="wrapper">
		<h5><strong>Portfolio</strong> Simon Müller</h5>
		<Button>
			<a class="link" target="_blank" href="mailto:hey@seimon.ch">
				<p>Available for freelance work</p>
				<p>hey@seimon.ch</p>
			</a>
		</Button>
	</div>
</div>

<style>
	.header {
		display: flex;
		justify-content: center;
		background-color: var(--primary-100);
		height: 15vh;
		border-radius: 10px 10px 0 0;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		margin: 0.5rem;
		max-width: 2000px;
		align-items: center;
		justify-content: space-evenly;
	}

	a {
		border: 0;
		padding: 0;
		margin: 0;
	}

	/* @media screen and (max-width: 550px) {
		.wrapper {
			flex-direction: column;
			align-items: flex-start;
		}

		h5 {
			padding-top: 10px;
		}
	}

	@media (min-width: 60em) {
		.wrapper {
			width: 85%;
		}
	}

	@media (min-width: 92em) {
		.wrapper {
			width: 90%;
		}
	} */
</style>
