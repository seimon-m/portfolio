<script>
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.header', {
			scrollTrigger: {
				trigger: '.content',
				start: 300,
				toggleActions: 'restart none none reverse'
				// markers: true
			},
			opacity: 0
		});
	});
</script>

<div class="header">
	<h1>Portfolio</h1>
	<h5>Simon Müller</h5>
</div>

<style>
	.header {
		position: fixed;
		display: flex;
		justify-content: center;
		flex-direction: column;
		background-color: var(--white);
		top: 0;
	}

	h1 {
		font-size: 25vw;
		color: var(--primary-100);
		mix-blend-mode: difference;
		line-height: 90%;
		/* font-weight: 100; */
	}

	/* @media screen and (max-width: 550px) {
		.wrapper {
			flex-direction: column;
			align-items: flex-start;
		}

		h5 {
			padding-top: 10px;
		}
	}

	@media (min-width: 60em) {
		.wrapper {
			width: 85%;
		}
	}

	@media (min-width: 92em) {
		.wrapper {
			width: 90%;
		}
	} */
</style>
