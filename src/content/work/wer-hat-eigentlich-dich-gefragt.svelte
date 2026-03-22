<script context="module">
    import previewImage from "$lib/assets/projects/wer-hat-eigentlich-dich-gefragt/wer-hat-eigentlich-dich-gefragt-1.jpg?enhanced";

    export const metadata = {
        id: 8,
        title: "Wer hat eigentlich dich gefragt?",
        tags: "performance",
        image: previewImage,
        date: "2022",
    };
</script>

<script>
    import WorkLayout from "$lib/layouts/WorkLayout.svelte";

    import image1 from "$lib/assets/projects/wer-hat-eigentlich-dich-gefragt/wer-hat-eigentlich-dich-gefragt-1.jpg?enhanced";
    import image2 from "$lib/assets/projects/wer-hat-eigentlich-dich-gefragt/wer-hat-eigentlich-dich-gefragt-2.jpg?enhanced";
    import image3 from "$lib/assets/projects/wer-hat-eigentlich-dich-gefragt/wer-hat-eigentlich-dich-gefragt-3.jpg?enhanced";
    import image4 from "$lib/assets/projects/wer-hat-eigentlich-dich-gefragt/wer-hat-eigentlich-dich-gefragt-4.jpg?enhanced";
    import image5 from "$lib/assets/projects/wer-hat-eigentlich-dich-gefragt/wer-hat-eigentlich-dich-gefragt-5.jpg?enhanced";
</script>

<WorkLayout>
    <svelte:fragment slot="left">
        <enhanced:img
            class="heroimage"
            src={image1}
            alt="Wer hat eigentlich dich gefragt? performance"
        />

        <div class="infos">
            <h3 class="title">Wer hat eigentlich dich gefragt?</h3>

            <p>
                Why can I hardly get out of bed in the morning? When will I know
                what will happen in the future? How do I love? What do I feel
                when I feel nothing? Where can I breathe freely? And where is my
                left shoe? The everyday lives of five young adolescents are
                characterised by questions. Their search for answers plunges
                them into a diffuse, intermediate world in which no question
                remains unanswered, no sentence unfinished, no contradiction
                unresolved. What initially resembles a paradisiacal state of
                omniscience soon turns out to be a path to new questions and
                confronts the young people with their own vulnerability.
            </p>

            <div>
                <p>
                    In the theatre production <italic
                        >Wer hat eigentlich dich gefragt?</italic
                    >, a group of young people deal with the insecurities of
                    becoming an adult. The avatar is played by other young
                    people on stage with the help of VR headsets. The avatars
                    are projected onto moving elements on the stage using
                    projection mapping, which allows the physical and virtual
                    characters to interact.
                </p>
            </div>

            <div>
                <h4>Personal contribution</h4>
                <p>
                    I was responsible for the entire projection mapping of the
                    avatars onto the moving elements on stage. This included
                    projecting the livestream of the avatars correctly and at
                    the right moment to different locations. I designed the
                    whole projector setup (the whole stage was covered by 3
                    projectors), was responsible for cueing the video streams
                    and driving the sound effects in a theatre production with
                    11 live shows.
                </p>
            </div>

            <div>
                <h4>Tech Stack</h4>
                <ul class="list">
                    <li>MadMapper</li>
                    <li>Ableton</li>
                    <li>OBS</li>
                </ul>
            </div>

            <div>
                <h4>Credits & Contribution</h4>
                <ul class="list">
                    <li>
                        Art Direction - <strong
                            >Benjamin Heller, Gilda Laneve</strong
                        >
                    </li>
                    <li>
                        Technical lead & avatar creation - <strong
                            >Vivien Helbling</strong
                        >
                    </li>
                    <li>Equipment - <strong>Naïma Heim</strong></li>
                    <li>
                        Production management - <strong
                            >Gian Leander Bättig</strong
                        >
                    </li>
                    <li>Graphics - <strong>Hannah Bucher</strong></li>
                    <li>Photography - <strong>Ingo Höhn</strong></li>
                    <li>
                        Acting - <strong
                            >Lukas Kraft, Marilu Egli, Nicolas Hunziker,
                            Nicholas Fleischmann, Olivia Brank, Rosa Soto, Selma
                            Betschart, Silvia Kinal, Simeon Späti, Smilla Späti</strong
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
        </div>
    </svelte:fragment>
</WorkLayout>
