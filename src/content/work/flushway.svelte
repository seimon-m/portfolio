<script context="module">
    export const metadata = {
        id: 1,
        title: "Flushway",
        tags: "website",
        image: "/projects/flushway/flushway-screenshot_01.png",
        date: "2022",
    };
</script>

<script>
    import WorkLayout from "$lib/layouts/WorkLayout.svelte";
</script>

<WorkLayout>
    <svelte:fragment slot="left">
        <img
            class="heroimage"
            src="/projects/flushway/flushway-screenshot_01.png"
            alt="Flushway screenshot"
        />

        <div class="infos">
            <h3 class="title">Flushway</h3>

            <p>
                What happens to your wastewater when you press the flush button?
                In this web project, the path your wastewater takes when it
                leaves your home is shown on a map. The path runs from your
                house, through the sewage system, to the sewage treatment plant
                and finally into the river Reuss. We have illustrated and
                described the process in the wastewater treatment plant so that
                you understand how your wastewater is treated.
            </p>

            <div>
                <h4>Personal contribution</h4>
                <p>
                    We developed the concept together in an interdisciplinary
                    team. For this purpose we visited a water treatment plant in
                    Lucerne. I programmed the site with Vue.js and created the
                    animations with GSAP.
                </p>
            </div>

            <div>
                <h4>Tech Stack</h4>
                <ul class="list">
                    <li>Vue.js</li>
                    <li>GSAP</li>
                    <li>Mapbox</li>
                </ul>
            </div>

            <iframe
                src="https://www.youtube.com/embed/JQju8B5M6q8?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>

            <div>
                <h4>Notice</h4>
                <p>
                    This is a study project and was realized within 7 days. The
                    website is not optimized for mobile devices.
                </p>
            </div>

            <div>
                <h4>Link</h4>
                <a href="https://flushway.netlify.app/" target="_blank"
                    >Flushway</a
                >
            </div>

            <div>
                <h4>Credits</h4>
                <ul class="list">
                    <li>
                        Concept, Programming - <strong>Simon Müller</strong>
                    </li>
                    <li>Concept, Design - <strong>Chiara Kühne</strong></li>
                    <li>
                        Concept, Design, Illustration - <strong
                            >Silja Bossert</strong
                        >
                    </li>
                </ul>
            </div>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="right">
        <div class="images right">
            <img src="/projects/flushway/flushway-screenshot_01.png" alt="" />
            <img src="/projects/flushway/flushway-screenshot_02.png" alt="" />
            <img src="/projects/flushway/flushway-screenshot_03.png" alt="" />
            <img src="/projects/flushway/flushway-screenshot_04.png" alt="" />
            <img src="/projects/flushway/flushway-screenshot_05.png" alt="" />
        </div>
    </svelte:fragment>
</WorkLayout>
