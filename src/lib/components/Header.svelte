<div class="header">
	<div class="wrapper">
		<h5>Simon Müller</h5>
		<nav>
			<a href="#work">WORK</a>
			<a href="#about">ABOUT</a>
			<a href="#contact">CONTACT</a>
			<div class="dot" />
		</nav>
	</div>
</div>

<style>
	.header {
		display: flex;
		justify-content: center;
		background-color: var(--primary-100);
		padding: 2vh 0vw;
	}
	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 90%;
		max-width: 1200px;
		align-items: center;
	}

	nav {
		list-style-type: none;
	}

	a {
		text-decoration: none;
		width: 100px;
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
		display: inline-block;
		text-align: center;
		color: black;
	}

	a:hover {
		color: var(--secondary-100);
	}

	.dot {
		width: 6px;
		height: 6px;
		background: var(--secondary-100);
		border-radius: 50%;
		opacity: 0;
		transform: translateX(50px);
		transition: all 0.3s ease-in-out;
	}

	a:nth-child(1):hover ~ .dot {
		transform: translateX(50px);
		transition: all 0.3s ease-in-out;
		opacity: 1;
	}

	a:nth-child(2):hover ~ .dot {
		transform: translateX(150px);
		transition: all 0.3s ease-in-out;
		opacity: 1;
	}

	a:nth-child(3):hover ~ .dot {
		transform: translateX(260px);
		transition: all 0.3s ease-in-out;
		opacity: 1;
	}

	@media screen and (max-width: 550px) {
		.wrapper {
			flex-direction: column;
			align-items: flex-start;
		}
		nav {
			display: flex;
			margin-top: 10px;
			justify-content: flex-start;
			transform: translateX(-28px);
		}

		.dot {
			display: none;
		}
	}
</style>
