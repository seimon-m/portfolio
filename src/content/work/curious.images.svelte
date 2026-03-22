<script context="module">
    import previewImage from "$lib/assets/projects/curious.images/curious.images-1.png?enhanced";

    export const metadata = {
        id: 7,
        title: "curious.images",
        tags: "website",
        image: previewImage,
        date: "2022",
    };
</script>

<script>
    import WorkLayout from "$lib/layouts/WorkLayout.svelte";

    import image1 from "$lib/assets/projects/curious.images/curious.images-1.png?enhanced";
    import image2 from "$lib/assets/projects/curious.images/curious.images-2.png?enhanced";
    import image3 from "$lib/assets/projects/curious.images/curious.images-3.png?enhanced";
    import image4 from "$lib/assets/projects/curious.images/curious.images-4.png?enhanced";
    import image5 from "$lib/assets/projects/curious.images/curious.images-5.png?enhanced";
    import image6 from "$lib/assets/projects/curious.images/curious.images-6.png?enhanced";
    import image7 from "$lib/assets/projects/curious.images/curious.images-7.png?enhanced";
    import image8 from "$lib/assets/projects/curious.images/curious.images-8.png?enhanced";
    import image9 from "$lib/assets/projects/curious.images/curious.images-9.png?enhanced";
</script>

<WorkLayout>
    <svelte:fragment slot="left">
        <enhanced:img
            class="heroimage"
            src={image1}
            alt="curious.images screenshot"
        />

        <div class="infos">
            <h3 class="title">curious.images</h3>

            <p>
                For space enthusiasts, <em>curious.images</em> is the place
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
            <enhanced:img src={image1} alt="" />
            <enhanced:img src={image2} alt="" />
            <enhanced:img src={image3} alt="" />
            <enhanced:img src={image4} alt="" />
            <enhanced:img src={image5} alt="" />
            <enhanced:img src={image6} alt="" />
            <enhanced:img src={image7} alt="" />
            <enhanced:img src={image8} alt="" />
            <enhanced:img src={image9} alt="" />
        </div>
    </svelte:fragment>
</WorkLayout>
