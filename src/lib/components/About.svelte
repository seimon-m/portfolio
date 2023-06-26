<script>
    import simon_wide from "$lib/assets/simon_wide.jpg";
    import cv from "$lib/assets/lebenslauf.pdf";
    import Link from "./Link.svelte";
    import { tiltButton } from "$lib/scripts/effects";
</script>

<div class="about">
    <img
        src={simon_wide}
        alt="me in front of a concrete wall with two different light sources from the left in bluish light and from the right in yellowish light"
    />
    <div class="intro card">
        <h3>I'm Simon,</h3>
        <p class="intro__text">
            a designer, web developer, and media artist based in Bern,
            Switzerland. My practice includes experimental immersive projects as
            well as more traditional works for the digital and analog realms.
        </p>
        <p />
        <p class="intro__text">
            I graduated from the Lucerne University of Applied Sciences and Arts
            with a Bachelor's degree in Digital Ideation. Although a newcomer to
            the field of media art, I already completed several projects in this
            realm, in addition to my efforts in web development. My works in the
            spatial context combinse physical and digital elements, creating an
            immersive experience that explores the intersection between
            technology and humanity. In those, the audience is encouraged to
            contemplate the ways in which technology shapes our perceptions of
            the world.
        </p>
        <p />
        <p class="intro__text">
            Explore my portfolio to get a sense of my work, and feel free to
            reach out if you're interested in collaborating or if you have some
            questions.
        </p>

        <!-- <p class="intro__text olive">
            PS: Did you notice the favicon? I am a huge lover of all kinds of
            olives and I kind of have them under my skin too. Just a personal
            fact about me.
        </p> -->
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
        <a class="button" href="mailto:hey@seimon.ch" use:tiltButton
            >Write an Email</a
        >
        <Link href={cv} target="_blank" rel="noreferrer">Download CV</Link>

        <Link href="https://github.com/seimon-m">Meet at GitHub</Link>
        <Link href="https://www.linkedin.com/in/seimon-m/"
            >Connect on LinkedIn</Link
        >
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

    img {
        width: 100%;
        border-radius: 10px;
        margin: 0;
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

    .olive {
        display: none;
    }

    .social {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        gap: 0.8rem;
    }

    h3 {
        font-size: 48px;
        margin-bottom: 0.5em;
    }

    ul:last-of-type {
        border-bottom: 0.5px solid black;
    }

    li {
        padding: 1em 0 1em 0;
        border-top: 0.5px solid black;
        transition: all 0.4s ease-in-out;
    }

    li:hover {
        background-color: var(--primary-100);
        box-shadow: inset 0px 11px 8px -10px #aa98be,
            inset 0px -11px 8px -10px #aa98be;
    }

    @media only screen and (min-width: 768px) {
        .about {
            gap: 1.5rem;
            margin-left: 8vw;
            grid-template-columns: 1fr 1fr;
        }
        .card {
            padding: 2em;
        }
        img {
            position: relative;
            left: -8vw;
            top: -15%;
            width: 120%;
        }

        .passion {
            margin-top: -90%;
        }

        .olive {
            display: unset;
        }
    }

    @media only screen and (min-width: 900px) {
        .passion {
            margin-top: -60%;
        }
    }

    @media only screen and (min-width: 1000px) {
        .passion {
            margin-top: -40%;
        }
    }

    @media only screen and (min-width: 1150px) {
        .card {
            padding: 3em;
        }
        .passion {
            margin-top: -30%;
        }
    }
    @media only screen and (min-width: 1385px) {
        .passion {
            margin-top: -20%;
        }
    }
    @media only screen and (min-width: 1500px) {
        .passion {
            margin-top: -10%;
        }
    }
</style>
