<script context="module">
    import previewImage from "$lib/assets/projects/gallien2025/gallien-2025-0.png?enhanced";

    export const metadata = {
        id: 1,
        title: "Gallien 2025",
        tags: "website",
        image: previewImage,
        date: "2025",
    };
</script>

<script>
    import WorkLayout from "$lib/layouts/WorkLayout.svelte";

    import heroImage from "$lib/assets/projects/gallien2025/gallien-2025-0.png?enhanced";
    import image3 from "$lib/assets/projects/gallien2025/gallien-2025-2.png?enhanced";
    import image4 from "$lib/assets/projects/gallien2025/gallien-2025-3.png?enhanced";
    import image6 from "$lib/assets/projects/gallien2025/gallien-2025-5.png?enhanced";
    import image7 from "$lib/assets/projects/gallien2025/gallien-2025-6.png?enhanced";
    import image8 from "$lib/assets/projects/gallien2025/gallien-2025-7.png?enhanced";
    import image9 from "$lib/assets/projects/gallien2025/gallien-2025-8.png?enhanced";
    import image10 from "$lib/assets/projects/gallien2025/gallien-2025-9.png?enhanced";
    import image11 from "$lib/assets/projects/gallien2025/gallien-2025-10.png?enhanced";
</script>

<WorkLayout>
    <svelte:fragment slot="left">
        <enhanced:img
            class="heroimage"
            src={heroImage}
            alt="Gallien 2025 website"
        />

        <div class="infos">
            <h3 class="title">Gallien 2025</h3>

            <p>
                Gallien 2025 was the international summer camp of Pfadi
                Aarewacht Lyss, where we travelled to Brittany, France, for two
                weeks of adventure. I independently designed and developed the
                entire website for the project, from the first concept to the
                final implementation. The website served as the central hub for
                participants, parents, and sponsors. Before the camp, it
                provided all essential information about the trip, preparation,
                and logistics. During the camp, it became a daily blog where we
                shared stories, photos, and updates from our journey through
                Brittany. The result is a modern and easy-to-use website that
                brings together information, storytelling, and design, capturing
                both the spirit of the camp and the needs of its community.
            </p>

            <div>
                <h4>Tech Stack</h4>
                <ul class="list">
                    <li>SvelteKit</li>
                    <li>Tailwind</li>
                    <li>Sanity CMS (for the blog)</li>
                </ul>
            </div>

            <div>
                <h4>Link</h4>
                <a href="https://www.gallien2025.ch/" target="_blank"
                    >Gallien 2025</a
                >
            </div>

            <div>
                <h4>Credits & Contribution</h4>
                <ul class="list">
                    <li>Design, Programming, Logo - <strong>Simon Müller</strong></li>
                </ul>
            </div>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="right">
        <div class="images right">
            <enhanced:img
                src={image3}
                alt=""
            />
            <enhanced:img
                src={image4}
                alt=""
            />
            <enhanced:img
                src={image6}
                alt=""
            />
            <enhanced:img
                src={image7}
                alt=""
            />
            <enhanced:img
                src={image8}
                alt=""
            />
            <enhanced:img
                src={image9}
                alt=""
            />
            <enhanced:img
                src={image10}
                alt=""
            />
            <enhanced:img
                src={image11}
                alt=""
            />
        </div>
    </svelte:fragment>
</WorkLayout>
