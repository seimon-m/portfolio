<script>
	import github from '$lib/assets/GitHub.png';
	import linkedin from '$lib/assets/LinkedIn.png';
	import mail from '$lib/assets/Mail.png';
	import simon from '$lib/assets/simon-klein.webp';
</script>

<svelte:head>
	<title>Simon Müller</title>
	<html lang="en" />
</svelte:head>

<div class="main">
	<div class="card">
		<h1>Hey, I'm Simon</h1>
		<div class="image">
			<img class="simon" alt="Portrait of Simon Müller" src={simon} />
		</div>
		<div class="text">
			<p>This site is under heavy development.</p>
			<p>For now, just get in touch:</p>
		</div>
		<div class="links">
			<a class="linkedin" href="https://www.linkedin.com/in/seimon-m">
				<img alt="LinkedIn Logo" src={linkedin} />
			</a>
			<a class="mail" href="mailto:hey@seimon.ch">
				<img alt="Mail Logo" src={mail} />
			</a>
			<a class="github" href="https://github.com/seimon-m">
				<img alt="GitHub Logo" src={github} />
			</a>
		</div>
	</div>
</div>

<style>
	.main {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #533162;
	}

	h1 {
		color: #f9dbbd;
		margin-left: 30px;
		margin-top: 10px;
	}

	p {
		color: #f9dbbd;
		margin-left: 30px;
	}

	.card {
		background: rgba(243, 225, 225, 0.4);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border: 1px solid rgba(243, 225, 225, 0.2);
		width: auto;
		height: auto;
		margin: 10px;
		padding: 10px;
	}

	.image {
		margin: 10px 30px;
	}

	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 20px;
	}

	.links > a {
		margin: 0px 30px;
	}

	.links > a > img {
		height: 30px;
	}

	.simon {
		max-width: 80vw;
		max-height: 60vh;
		border-radius: 16px;
	}
</style>
