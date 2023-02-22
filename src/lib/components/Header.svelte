<div class="header">
	<div class="wrapper">
		<h5>Simon Müller</h5>
		<div class="link-wrapper">
			<p>AVAILABLE FOR FREELANCE WORK</p>
			<a class="link" target="_blank" href="mailto:hey@seimon.ch">hey@seimon.ch</a>
		</div>
	</div>
</div>

<style>
	.header {
		display: flex;
		justify-content: center;
		background-color: var(--primary-100);
	}
	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 95%;
		height: 11vh;
		max-width: 2000px;
		align-items: center;
	}

	.link-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	a {
		border: 0;
		padding: 0;
		margin: 0;
	}

	@media screen and (max-width: 550px) {
		.wrapper {
			flex-direction: column;
			align-items: flex-start;
		}

		h5 {
			padding-top: 10px;
		}
	}
</style>
