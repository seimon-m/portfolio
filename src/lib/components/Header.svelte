<script>
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.header', {
			scrollTrigger: {
				trigger: '.start-title',
				start: 'center center',
				end: '+=300',
				toggleActions: 'restart none none reverse',
				scrub: true
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
		margin: 0 auto;
		max-width: 2500px;
	}

	h1 {
		font-size: 25vw;
		color: var(--primary-100);
		mix-blend-mode: difference;
		line-height: 90%;
		font-size: clamp(10px, calc(10vw + 42px), 190pt);
	}

	@media only screen and (min-width: 768px) {
		.header {
			flex-direction: row;
			justify-content: space-between;
			background-color: var(--white);
			top: 0;
			left: 1vw;
			right: 1vw;
			margin-top: 0.5rem;
		}
	}
</style>
