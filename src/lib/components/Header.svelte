<div class="header">
	<p>Simon Müller</p>
	<nav>
		<a href="#work">WORK</a>
		<a href="#about">ABOUT</a>
		<a href="#contact">CONTACT</a>
		<div class="dot" />
	</nav>
</div>

<style>
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: sticky;
		padding: 2vh 6vw;
	}

	nav {
		list-style-type: none;
		float: right;
	}

	a {
		text-decoration: none;
		width: 80px;
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
		-webkit-transform: translateX(30px);
		transform: translateX(40px);
		-webkit-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}

	a:nth-child(1):hover ~ .dot {
		transform: translateX(40px);
		transition: all 0.2s ease-in-out;
		opacity: 1;
	}

	a:nth-child(2):hover ~ .dot {
		transform: translateX(120px);
		transition: all 0.2s ease-in-out;
		opacity: 1;
	}

	a:nth-child(3):hover ~ .dot {
		transform: translateX(210px);
		transition: all 0.2s ease-in-out;
		opacity: 1;
	}

	p {
		/* width: fit-content; */
	}
</style>
