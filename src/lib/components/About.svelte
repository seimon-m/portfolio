<script>
	import simon_wide from '$lib/assets/simon_wide.jpg';
	import cv from '$lib/assets/lebenslauf.pdf';
	import Button from './Button.svelte';
	import Link from './Link.svelte';
</script>

<div class="about">
	<img
		src={simon_wide}
		alt="me in front of a concrete wall with two different light sources from the left in bluish light and from the right in yellowish light"
	/>
	<div class="intro card">
		<h3>I'm Simon,</h3>
		<p class="intro__text">
			a multi-talented designer, web developer, and media artist based in Bern, Switzerland. My work
			transcends the boundaries of the screen, exploring the space beyond and blurring the lines
			between the physical and the digital. My goal is always to craft immersive experiences that
			captivate people.
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
		</p>
	</div>
	<div class="passion card">
		<h3>Things I am passionate about</h3>
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

	<div class="social card">
		<h3>Get in touch</h3>
		<Button><a href="mailto:hey@seimon.ch">Write an Email</a></Button>
		<Link href={cv} target="_blank" rel="noreferrer">Download CV</Link>

		<Link href="https://github.com/seimon-m">Meet at GitHub</Link>
		<Link href="https://www.linkedin.com/in/seimon-m/">Connect on LinkedIn</Link>
	</div>
</div>

<style>
	.about {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: 1fr;
		background-color: var(--primary-100);
		border-radius: 10px;
	}

	@media (min-width: 60em) {
		.about {
			grid-template-columns: 1fr 1fr;
		}
	}

	img {
		width: 100%;
		border-radius: 10px;
	}

	a {
		color: var(--font);
	}
	.card {
		padding: 0 1.2rem 1.2rem 1.2rem;
	}

	.intro__text {
		margin-bottom: 1em;
	}
	.intro__text:last-child {
		margin-bottom: 0;
	}

	.social {
		display: flex;
		flex-direction: column;
		width: fit-content;
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 48px;
		margin-bottom: 0.5em;
	}

	li {
		padding: 1em 0 1em 0;
		border-top: 0.5px solid black;
		transition: all 0.4s ease-in-out;
	}

	li:hover {
		background-color: var(--primary-100);
		box-shadow: inset 0px 11px 8px -10px #aa98be, inset 0px -11px 8px -10px #aa98be;
	}

	@media (min-width: 60em) {
		.card {
			padding: 2em;
		}
	}
	@media (min-width: 92em) {
		.card {
			padding: 3em;
		}
	}
</style>
