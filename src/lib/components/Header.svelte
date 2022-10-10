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
		background-color: #e1b9b9;
		padding: 2vh 0vw;
	}
	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 90%;
		max-width: 1200px;
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
	}

	a:hover {
		color: #fddb3a;
	}

	.dot {
		width: 6px;
		height: 6px;
		background: #fddb3a;
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
