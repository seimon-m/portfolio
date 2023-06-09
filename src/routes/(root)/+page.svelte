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
				{#each projects as project}
					<WorkPreview {project} />
				{/each}
			</div>
		</section>
		<section class="section about" id="about">
			<h2 class="section-title">about</h2>
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

	/* .section {
		position: relative;
		margin: 0.5em;
		margin-bottom: 6rem;
	}

	.section-title {
		position: sticky;
		transform: rotate(-90deg) translateX(-190%) translateY(-10%);
		z-index: 1;
		transform-origin: top left;
		left: 0;
		top: 0px;
		width: fit-content;
		margin-right: 200px;
		border-radius: 0 0 13px 13px;
		padding: 0.05em 0.2em;
		box-sizing: border-box;
		overflow: hidden;
		background: rgba(253, 205, 159, 0.65);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3.4px);
		-webkit-backdrop-filter: blur(3.4px);
		border: 1px solid rgba(253, 205, 159, 0.35);
	} */

	.start-title {
		padding: 0 1rem 4rem 1rem;
	}

	.start {
		background-color: var(--primary-100);
		position: relative;
		height: 84vh;
		display: flex;
		align-items: center;
		border-radius: 0 0 10px 10px;
	}

	@supports (height: 100dvh) {
		.start {
			height: 84dvh;
		}
	}

	.scroll-indicator {
		position: absolute;
		bottom: 0;
		width: 100%;
		left: 0;
		/* z-index: 10; */
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
		gap: 1rem;
	}

	@media (min-width: 60em) {
		/* .content {
			width: 85%;
		} */

		/* .section {
			padding-left: 0;
		} */

		/* .section-title {
			transform: rotate(-90deg) translateX(-150%) translateY(-110%);
		} */
	}

	@media (min-width: 92em) {
		/* .content {
			width: 90%;
		} */

		/* .section-title {
			transform: rotate(-90deg) translateX(-154%) translateY(-105%);
		} */
	}
</style>
