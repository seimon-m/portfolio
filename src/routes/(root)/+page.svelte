<script>
    import gsap from "gsap/dist/gsap";
    import ScrollTrigger from "gsap/dist/ScrollTrigger";
    import { onMount } from "svelte";
    import "$lib/styles/global.css";
    import WorkPreview from "$lib/components/WorkPreview.svelte";
    import projects from "$lib/data/work.json";
    import About from "$lib/components/About.svelte";
    import { tiltButton } from "$lib/scripts/effects";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".scroll-indicator", {
            scrollTrigger: {
                trigger: ".work",
                toggleActions: "restart none none reverse",
            },
            duration: 1,
            ease: "power1.inOut",
            opacity: 0,
        });
    });
</script>

<div class="container">
    <div class="content">
        <section class="start">
            <!-- <a
                class="button"
                target="_blank"
                href="mailto:hey@seimon.ch"
                use:tiltButton
            >
                <p>Available for freelance work</p>
                <p>hey@seimon.ch</p>
            </a> -->

            <div class="start-title">
                <h1>Web Entwickler,</h1>
                <h1>Creative Coder &</h1>
                <h1>Interaction Designer</h1>
                <div>
                    <div class="scroll-indicator">
                        <p class="scroll-text">
                            <span>scroll down</span>
                        </p>
                        <span
                            style="z-index: 0;transform: matrix(1, 0, 0, 1, 0, 0);"
                        />
                    </div>
                </div>
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
        max-width: 2500px;
        position: relative;
    }

    .start {
        background-color: rgba(207, 181, 234, 0.8);
        position: relative;
        margin-top: 15vh;
        height: 84vh;
        display: flex;
        align-items: start;
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
        margin: 2em;
        max-width: 1800px;
        margin-bottom: 5vh;
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
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        mix-blend-mode: difference;

        border: 1px solid rgba(71, 64, 59, 0.4);
        border-radius: 10px;
        padding: 0px 10px;
    }

    /* Fix for Safari blend mode bug */
    @supports not (backdrop-filter: blur(5px)) {
        .section-title {
            color: var(--primary-100);
            mix-blend-mode: difference;
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(98, 94, 90, 0.9);
            background-color: rgba(0, 0, 0, 0.8);
        }
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
            margin: 0em 0.1em;
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
        .start-title {
            font-size: clamp(10px, calc(7vw + 22px), 150px);
        }
    }
    @media only screen and (min-width: 1400px) {
        .start-title {
            font-size: clamp(10px, calc(8vw + 22px), 200px);
            max-width: 1900px;
        }
    }

    @media only screen and (min-width: 2000px) {
        .section-title {
            margin-left: -50vw;
            transform: rotate(-90deg) translateX(-141%) translateY(-10%);
        }

        .start-title {
            max-width: 2500px;
        }
    }
</style>
