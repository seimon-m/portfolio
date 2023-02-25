<script>
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import '$lib/styles/global.css';
	import WorkPreview from '$lib/components/WorkPreview.svelte';
	import work from '$lib/data/work.json';
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
		<div class="start">
			<h1 class="start-title">Media artist, Coder and Designer</h1>
			<div class="scroll-indicator">
				<p class="scroll-text">
					<span>scroll down</span>
				</p>
				<span style="z-index: 0;transform: matrix(1, 0, 0, 1, 0, 0);" />
			</div>
		</div>
		<div class="section work" id="work">
			<h2 class="section-title">work</h2>

			<div class="work-wrapper">
				{#each work as project}
					<WorkPreview {project} />
				{/each}
			</div>
		</div>
		<div class="section about" id="about">
			<h2 class="section-title">about</h2>
			<About />
		</div>
	</div>
</div>

<style>
	.container {
		background-color: var(--primary-100);
		padding-top: 10vh;
		box-sizing: border-box;
		position: relative;
		display: flex;
		justify-content: center;
	}
	.content {
		position: relative;
		width: 95%;
		margin-left: 0 auto;
		max-width: 2000px;
		height: 100%;
		box-sizing: border-box;
	}

	.start {
		position: relative;
		height: 79vh;
		display: flex;
		align-items: center;
	}

	@supports (height: 100dvh) {
		.start {
			height: 79dvh;
		}
	}

	.scroll-indicator {
		position: absolute;
		bottom: 0;
		width: 100%;
		left: 0;
		z-index: 1;
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

	.section {
		position: relative;
		margin-bottom: 10rem;
		padding-left: 3.5em;
	}

	.section-title {
		position: sticky;
		z-index: 1;
		transform-origin: top left;
		left: 0;
		top: 100px;
		width: fit-content;
		padding: 0 0.3em;
		padding-top: 50px;
		transform: rotate(-90deg) translateX(-159.5%) translateY(-105%);
		border-radius: 0 0 13px 13px;
		box-sizing: border-box;
		overflow: hidden;
		background: rgba(253, 205, 159, 0.57);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3.4px);
		-webkit-backdrop-filter: blur(3.4px);
		border: 1px solid rgba(253, 205, 159, 0.35);
	}

	.start-title {
		margin-bottom: 15vh;
	}

	.work-wrapper {
		display: grid;
		margin: 0 auto;
		/* gap: 5rem; */
		grid-template-columns: 1fr;
	}

	@media (min-width: 60em) {
		.content {
			width: 85%;
		}

		.section {
			padding-left: 0;
		}

		.section-title {
			transform: rotate(-90deg) translateX(-150%) translateY(-110%);
		}
	}

	@media (min-width: 92em) {
		.content {
			width: 90%;
		}

		.section-title {
			transform: rotate(-90deg) translateX(-154%) translateY(-105%);
		}
	}
</style>
