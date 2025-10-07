<script context="module">
    export const metadata = {
        id: 4,
        title: "Hypnose Lyss",
        tags: "website",
        image: "/projects/hypnose-lyss/hypnose-lyss-0.png",
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
            src="/projects/hypnose-lyss/hypnose-lyss-1.png"
            alt="Hypnosetherapie Lyss website"
        />

        <div class="infos">
            <h3 class="title">Hypnosetherapie Lyss</h3>

            <p>
                In this commissioned work, a simple website was designed for a
                self-employed hypnotherapist. The goal was to have a page with
                the most important information about the therapy and a contact
                form as soon as possible.
            </p>

            <div>
                <h4>Tech Stack</h4>
                <ul class="list">
                    <li>SvelteKit</li>
                </ul>
            </div>

            <div>
                <h4>Link</h4>
                <a href="https://www.hypnose-lyss.ch/" target="_blank"
                    >Hypnosetherapie Lyss</a
                >
            </div>

            <div>
                <h4>Credits & Contribution</h4>
                <ul class="list">
                    <li>Design, Programming - <strong>Simon Müller</strong></li>
                    <li>Logo - <strong>Anna Zinniker</strong></li>
                </ul>
            </div>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="right">
        <div class="images right">
            <img src="/projects/hypnose-lyss/hypnose-lyss-1.png" alt="" />
            <img src="/projects/hypnose-lyss/hypnose-lyss-2.png" alt="" />
            <img src="/projects/hypnose-lyss/hypnose-lyss-3.png" alt="" />
        </div>
    </svelte:fragment>
</WorkLayout>
