<script context="module">
    export const metadata = {
        id: 6,
        title: "ahoi",
        tags: "editorial design",
        image: "/projects/ahoi/ahoi-1.jpg",
        date: "2021",
    };
</script>

<script>
    import WorkLayout from "$lib/layouts/WorkLayout.svelte";
</script>

<WorkLayout>
    <svelte:fragment slot="left">
        <img
            class="heroimage"
            src="/projects/ahoi/ahoi-1.jpg"
            alt="ahoi magazine"
        />

        <div class="infos">
            <h3 class="title">ahoi</h3>

            <p>
                Since my earliest childhood, I have been a member of the Scouts,
                and I associate an incredible amount of my experiences with it.
                I am still involved in the Scouts, but now more in the
                background. For many years we have had a community magazine,
                called <italic>ahoi</italic>. This has not been changed for
                years and was printed in black and white. I have done a complete
                redesign and changed the process to printing in color. For this
                I developed a design system that should appeal to children,
                teenagers and adults. The <italic>ahoi</italic> is published twice
                a year and is published and edited by myself.
            </p>

            <div>
                <h4>Software used</h4>
                <ul class="list">
                    <li>Affinity Publisher</li>
                </ul>
            </div>

            <div>
                <h4>Credits & Contribution</h4>
                <ul class="list">
                    <li>Editorial Design - <strong>Simon Müller</strong></li>
                </ul>
            </div>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="right">
        <div class="images right">
            <img src="/projects/ahoi/ahoi-1.jpg" alt="" />
            <img src="/projects/ahoi/ahoi-2.jpg" alt="" />
            <img src="/projects/ahoi/ahoi-3.jpg" alt="" />
            <img src="/projects/ahoi/ahoi-4.jpg" alt="" />
        </div>
    </svelte:fragment>
</WorkLayout>
