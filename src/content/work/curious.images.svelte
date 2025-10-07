<script context="module">
    export const metadata = {
        id: 2,
        title: "curious.images",
        tags: "website",
        image: "/projects/curious.images/curious.images-1.png",
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
            src="/projects/curious.images/curious.images-1.png"
            alt="curious.images screenshot"
        />

        <div class="infos">
            <h3 class="title">curious.image</h3>

            <p>
                For space enthusiasts, <italic>curious.image</italic> is the place
                to go to visually explore the planet Mars. Our goal was to simplify
                access to the countless photos taken by the Mars rover Curiosity
                and make them more accessible. Enthusiasm for space was the spark
                for this idea. The images used in the galleries are official photographs
                taken by NASA's rovers, which have been conducting invaluable research
                on Mars for years.
            </p>

            <iframe
                src="https://www.youtube.com/embed/wKWRHlmwU1k?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style="margin-top: 6rem;"
            ></iframe>

            <div>
                <h4>Tech Stack</h4>
                <ul class="list">
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Typescript</li>
                </ul>
            </div>

            <div>
                <h4>Notice</h4>
                <p>
                    This is a study project and was realized within 7 days. The
                    website is no longer live due to its experimental nature and
                    the not inconsiderable server costs.
                </p>
            </div>

            <div>
                <h4>Credits & Contribution</h4>
                <ul class="list">
                    <li>
                        Concept, Backend - <strong>Ben Siegenthaler</strong>
                    </li>
                    <li>
                        Concept, Design, Frontend - <strong>Simon Müller</strong
                        >
                    </li>
                </ul>
            </div>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="right">
        <div class="images right">
            <img src="/projects/curious.images/curious.images-1.png" alt="" />
            <img src="/projects/curious.images/curious.images-2.png" alt="" />
            <img src="/projects/curious.images/curious.images-3.png" alt="" />
            <img src="/projects/curious.images/curious.images-4.png" alt="" />
            <img src="/projects/curious.images/curious.images-5.png" alt="" />
            <img src="/projects/curious.images/curious.images-6.png" alt="" />
            <img src="/projects/curious.images/curious.images-7.png" alt="" />
            <img src="/projects/curious.images/curious.images-8.png" alt="" />
            <img src="/projects/curious.images/curious.images-9.png" alt="" />
        </div>
    </svelte:fragment>
</WorkLayout>
