<div class="header">
	<div class="wrapper">
		<h5>Simon Müller</h5>
		<!-- <nav>
			<a href="#work">WORK</a>
			<a href="#about">ABOUT</a>
			<a href="#contact">CONTACT</a>
		</nav> -->
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
		/* max-width: 1200px; */
		align-items: center;
	}

	.link-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	/* a {
		text-decoration: none;
		width: calc(50px + 6vw);
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
		display: inline-block;
		text-align: center;
		color: black;
	} */

	a:hover {
		color: var(--secondary-100);
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
