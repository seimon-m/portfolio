<script context="module">
    export const metadata = {
        id: 3,
        title: "Träum von mir",
        tags: "performance",
        image: "/projects/traeum-von-mir/traeum-von-mir_1.jpg",
        date: "2023",
    };
</script>

<script>
    import WorkLayout from "$lib/layouts/WorkLayout.svelte";
</script>

<WorkLayout>
    <svelte:fragment slot="left">
        <img
            class="heroimage"
            src="/projects/traeum-von-mir/traeum-von-mir_1.jpg"
            alt="Träum von mir performance"
        />

        <div class="infos">
            <h3 class="title">Dream of Me</h3>

            <p>
                We will flirt, slowly approach each other, touch each other
                gently, kiss passionately, get lost in each other, feel
                passionate and alive, caress each other softly, and then just
                dream. <italic>Dream of Me</italic> combines experimental sounds
                with dynamic visuals and takes you on an immersive journey into the
                depths of a sensual world.
            </p>

            <iframe
                src="https://player.vimeo.com/video/817087983?h=cf8a8f2e5f&byline=0&portrait=0"
                title="Dream of Me performance video"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                style="margin-top: 6rem;"
            ></iframe>

            <div>
                <h4>Tech Stack</h4>
                <ul class="list">
                    <li>After Effects</li>
                    <li>MadMapper</li>
                </ul>
            </div>

            <div>
                <h4>Credits & Contribution</h4>
                <ul class="list">
                    <li>
                        Concept, Visuals - <strong
                            >Jonas Wolter, Eliya Maria Pagelli, Simon Müller</strong
                        >
                    </li>
                    <li>
                        Contemporary Music - <strong
                            >Nadine Speziga, Juan Contreras, Flora Karetka</strong
                        >
                    </li>
                </ul>
            </div>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="right">
        <div class="images right">
            <img src="/projects/traeum-von-mir/traeum-von-mir_1.jpg" alt="" />
            <img src="/projects/traeum-von-mir/traeum-von-mir_2.jpg" alt="" />
            <img src="/projects/traeum-von-mir/traeum-von-mir_3.jpg" alt="" />
        </div>
    </svelte:fragment>
</WorkLayout>
