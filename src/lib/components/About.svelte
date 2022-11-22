<script>
	import simon from '$lib/assets/simon-klein.webp';
	import cv from '$lib/assets/lebenslauf.pdf';
</script>

<div class="about">
	<img src={simon} alt="portrait of simon müller" width="250" />
	<p class="intro">
		I'm Simon, a creative coder and web enthusiast. I love to explore the space beyond the screen.
		My native language is Swiss German. I am also a fluent English speaker. I live in Bern,
		Switzerland.
	</p>
	<div class="right">
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

	<h3>
		<a href={cv} target="_blank" rel="noreferrer">Download CV</a>
	</h3>
</div>

<style>
	.intro {
		width: 60%;
		margin: 3vh 0 3vh 0;
	}
	h3 {
		font-size: 48px;
		margin: 4vh 0 4vh 0;
		text-align: end;
	}

	li {
		text-align: end;
	}
</style>
