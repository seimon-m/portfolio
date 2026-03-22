<script context="module">
    import previewImage from "$lib/assets/projects/ahoi/ahoi-1.jpg?enhanced";

    export const metadata = {
        id: 6,
        title: "ahoi",
        tags: "editorial design",
        image: previewImage,
        date: "2021",
    };
</script>

<script>
    import WorkLayout from "$lib/layouts/WorkLayout.svelte";

    import image1 from "$lib/assets/projects/ahoi/ahoi-1.jpg?enhanced";
    import image2 from "$lib/assets/projects/ahoi/ahoi-2.jpg?enhanced";
    import image3 from "$lib/assets/projects/ahoi/ahoi-3.jpg?enhanced";
    import image4 from "$lib/assets/projects/ahoi/ahoi-4.jpg?enhanced";
</script>

<WorkLayout>
    <svelte:fragment slot="left">
        <enhanced:img
            class="heroimage"
            src={image1}
            alt="ahoi magazine"
        />

        <div class="infos">
            <h3 class="title">ahoi</h3>

            <p>
                Since my earliest childhood, I have been a member of the Scouts,
                and I associate an incredible amount of my experiences with it.
                I am still involved in the Scouts, but now more in the
                background. For many years we have had a community magazine,
                called <em>ahoi</em>. This has not been changed for
                years and was printed in black and white. I have done a complete
                redesign and changed the process to printing in color. For this
                I developed a design system that should appeal to children,
                teenagers and adults. The <em>ahoi</em> is published twice
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
            <enhanced:img src={image1} alt="" />
            <enhanced:img src={image2} alt="" />
            <enhanced:img src={image3} alt="" />
            <enhanced:img src={image4} alt="" />
        </div>
    </svelte:fragment>
</WorkLayout>
