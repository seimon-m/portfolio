<script>
	import simon from '$lib/assets/simon-klein.webp';
	import cv from '$lib/assets/lebenslauf.pdf';
</script>

<div class="about">
	<img src={simon} alt="portrait of simon müller" width="250" />
	<div class="intro">
		<p class="intro__text">
			I'm Simon, a multi-talented designer, web developer, and media artist based in Bern,
			Switzerland. My work transcends the boundaries of the screen, exploring the space beyond and
			blurring the lines between the physical and the digital. My goal is always to craft immersive
			experiences that captivate people.
		</p>
		<p />
		<p class="intro__text">
			Drawing from my background as a electronic technician and my Bachelors Degree in Digital
			Ideation, I utilize various media to realize my artistic vision, with a particular passion for
			crafting for the web and its expansive accessibility.
		</p>
		<p />
		<p class="intro__text">
			My process is rooted in collaboration, allowing me to craft bespoke solutions that resonate
			with each individual client. Explore my portfolio to get a sense of my work, and feel free to
			reach out if you're interested in collaborating. Let's create something beautiful together.
			Simon
		</p>
	</div>
	<div class="contact buttons">
		<a href={cv} target="_blank" rel="noreferrer">Download CV</a>
		<a href="mailto:hey@seimon.ch" target="_blank" rel="noreferrer">Contact me</a>
	</div>

	<div class="passion">
		<h3>Things I am passionate about:</h3>
		<ul>
			<li>Webdevelopment</li>
			<li>Webdesign</li>
			<li>Creative Coding</li>
			<li>UX Design</li>
			<li>Interaction Design</li>
			<li>Photogaphie</li>
			<li>New Media Art</li>
			<li>Physical Computing</li>
		</ul>
	</div>

	<div class="social buttons">
		<a href="mailto:hey@seimon.ch" target="_blank" rel="noreferrer">Mail</a>
		<a href="https://github.com/seimon-m" target="_blank" rel="noreferrer">GitHub</a>
		<a href="https://www.linkedin.com/in/seimon-m/" target="_blank" rel="noreferrer">LinkedIn</a>
	</div>
</div>

<style>
	.about {
		display: grid;
		margin: 0 auto;
		gap: 1.5rem;
		grid-template-columns: 1fr;
	}

	.about > * {
		/* background-color: aliceblue; */
	}
	.intro {
		border: 0.5px solid black;
		padding: 1em;
	}

	.intro__text {
		margin-bottom: 1em;
	}
	.intro__text:last-child {
		margin-bottom: 0;
	}

	.passion {
		border: 0.5px solid black;
		padding: 1em;
	}

	.buttons {
		margin: 0 auto;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	h3 {
		font-size: 48px;
		text-align: end;
		margin-bottom: 0.5em;
	}

	li {
		text-align: end;
	}
</style>
