<script>
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import '$lib/styles/global.css';
	import WorkPreview from '$lib/components/WorkPreview.svelte';
	import projects from '$lib/data/work.json';
	import About from '$lib/components/About.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.scroll-indicator', {
			scrollTrigger: {
				trigger: '.work',
				toggleActions: 'restart none none reverse'
			},
			duration: 1,
			ease: 'power1.inOut',
			opacity: 0
		});
	});
</script>

<div class="container">
	<div class="content">
		<section class="start">
			<a class="button" target="_blank" href="mailto:hey@seimon.ch">
				<p>Available for freelance work</p>
				<p>hey@seimon.ch</p>
			</a>

			<h1 class="start-title">Media artist, Coder and Designer</h1>
			<div class="scroll-indicator">
				<p class="scroll-text">
					<span>scroll down</span>
				</p>
				<span style="z-index: 0;transform: matrix(1, 0, 0, 1, 0, 0);" />
			</div>
		</section>
		<section class="section work" id="work">
			<h2 class="section-title">work</h2>

			<div class="work-wrapper">
				{#each projects as project, index}
					{#if index === 0}
						<WorkPreview {project} class="first" />
					{:else}
						<WorkPreview {project} />
					{/if}
				{/each}
			</div>
		</section>
		<section class="section about" id="about">
			<h2 class="section-title about-title">about</h2>
			<About />
		</section>
	</div>
</div>

<style>
	.container {
		background-color: var(--white);
		display: flex;
		justify-content: center;
	}
	.content {
		position: relative;
		max-width: 2000px;
		position: relative;
	}

	.start {
		background-color: rgba(207, 181, 234, 0.8);
		position: relative;
		margin-top: 15vh;
		height: 84vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
		border-radius: 10px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3.4px);
		-webkit-backdrop-filter: blur(3.4px);
	}

	@supports (height: 100svh) {
		.start {
			height: 84svh;
		}
	}

	.start-title {
		padding: 0 1rem 4rem 1rem;
		transform: translateY(-2.5rem);
	}

	.section-title {
		position: sticky;
		top: 8%;
		left: 0;
		margin-left: -30px;
		z-index: 10;
		width: fit-content;
		transform-origin: top left;
		transform: rotate(-90deg) translateX(-110%) translateY(-20%);

		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		mix-blend-mode: difference;

		border: 1px solid rgba(253, 205, 159, 0.35);
		border-radius: 10px;
		padding: 0px 10px;
	}

	.about-title {
		margin-top: 100px;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 0;
		width: 100%;
		left: 0;
		z-index: 10;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}

	.scroll-indicator > span {
		width: 2px;
		height: 59px;
		background-color: rgb(0, 0, 0);
		transform-origin: bottom center;
	}

	.scroll-text {
		color: var(--font);
		margin-bottom: 5px;
		font-weight: 300;
	}

	.scroll-text > span {
		width: 100%;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 50%,
			rgb(0, 0, 0) 50%,
			rgb(0, 0, 0) 70%,
			rgba(172, 106, 172, 0) 60%
		);
		background-size: 0 100%;
		background-repeat: no-repeat;
		transition: 250ms linear;
	}

	.scroll-text > span:hover {
		background-size: 100% 100%;
	}

	.work-wrapper {
		display: grid;
		gap: 2rem;
	}

	@media only screen and (min-width: 768px) {
		.work-wrapper {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.start-title {
			max-width: 1400px;
			align-self: flex-start;
			margin-left: 4%;
		}
		.section-title {
			top: 8%;
			transform: rotate(-90deg) translateX(-105%) translateY(-20%);
		}
		.about-title {
			margin-top: 120px;
		}
	}

	@media only screen and (min-width: 992px) {
		.section-title {
			top: 8%;
			transform: rotate(-90deg) translateX(-110%) translateY(-20%);
		}
	}
	@media only screen and (min-width: 1400px) {
	}

	@media only screen and (min-width: 2000px) {
		.section-title {
			margin-left: -50vw;
			transform: rotate(-90deg) translateX(-141%) translateY(-10%);
		}
	}
</style>
