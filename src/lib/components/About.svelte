<script>
  import simon_wide from "$lib/assets/simon_wide.jpg?enhanced";
  import cv from "$lib/assets/CV-Simon-Müller.pdf";
  import Link from "./Link.svelte";
  import { tiltButton } from "$lib/scripts/effects";
</script>

<div class="about">
  <enhanced:img
    src={simon_wide}
    alt="me in front of a concrete wall with two different light sources from the left in bluish light and from the right in yellowish light"
  />
  <div class="intro card">
    <h3>I'm Simon</h3>
    <p class="intro__text">
      a designer, developer, and creative mind from Bern, Switzerland. I like
      working where technology, design, and storytelling meet.
    </p>
    <p class="intro__text">
      I studied Digital Ideation at the Lucerne University of Applied Sciences
      and Arts, where I explored how digital tools can shape experiences, both
      online and in physical space. Since then, I have worked on a mix of
      projects: from interactive installations and experimental media pieces to
      custom websites and learning applications.
    </p>
    <p class="intro__text">
        My work often plays with contrasts: analog and digital, human and machine, functional and poetic. I enjoy translating complex ideas into accessible, engaging experiences and collaborating with people who care about what they create.
    </p>
    <p class="intro__text">
        Have a look around and feel free to get in touch if you would like to collaborate or just talk about ideas.
    </p>
  </div>
  <div class="passion card">
    <h3>Things that inspire me</h3>
    <ul>
      <li>thoughtful digital design and meaningful user experiences</li>
      <li>creative coding and playful experimentation</li>
      <li>exploring how technology shapes human connection</li>
      <li>collaboration and cultural exchange</li>
      <li>photography and visual storytelling</li>
      <li>Working with a wide diversity of people</li>
      <li>interactive and media art in physical spaces</li>
      <li>learning, curiosity, and new perspectives</li>
    </ul>
  </div>

  <div class="social card">
    <h3>Get in touch</h3>
    <a class="button" href="mailto:hey@seimon.ch" use:tiltButton
      >Write an Email</a
    >
    <!-- <Link href={cv} target="_blank" rel="noreferrer">Download CV</Link> -->

    <Link href="https://github.com/seimon-m">Meet at GitHub</Link>
    <Link href="https://www.linkedin.com/in/seimon-m/">Connect on LinkedIn</Link
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
    height: auto;
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
    margin-bottom: 1rem;
    gap: 0.8rem;
  }

  h3 {
    font-size: 48px;
    margin-bottom: 0.2em;
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
    box-shadow:
      inset 0px 11px 8px -10px #aa98be,
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
      margin-top: -100%;
    }
  }
  @media only screen and (min-width: 850px) {
    .passion {
      margin-top: -100%;
    }
  }

  @media only screen and (min-width: 900px) {
    .passion {
      margin-top: -80%;
    }
  }

  @media only screen and (min-width: 990px) {
    .passion {
      margin-top: -60%;
    }
  }

  @media only screen and (min-width: 1080px) {
    .passion {
      margin-top: -45%;
    }
  }

  @media only screen and (min-width: 1150px) {
    .card {
      padding: 3em;
    }
    .passion {
      margin-top: -50%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .passion {
      margin-top: -40%;
    }
  }

  @media only screen and (min-width: 1350px) {
    .passion {
      margin-top: -30%;
    }
  }

  @media only screen and (min-width: 1450px) {
    .passion {
      margin-top: -20%;
    }
  }

  @media only screen and (min-width: 1700px) {
    .passion,
    .social {
      margin-top: -10%;
    }
  }
</style>
