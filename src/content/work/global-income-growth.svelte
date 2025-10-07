<script context="module">
    export const metadata = {
        id: 5,
        title: "Global Income Growth",
        tags: "data visualization",
        image: "/projects/global-income-growth/global-income-growth-0.jpg",
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
            src="/projects/global-income-growth/global-income-growth-1.jpg"
            alt="Global Income Growth visualization"
        />

        <div class="infos">
            <h3 class="title">Global Income Growth</h3>

            <p>
                The 17 Sustainable Development Goals of the United Nations are a
                call to action for all countries and put the fight against
                poverty and inequality as well as for sustainable development
                and environmental protection on the same agenda. For this
                project, I chose goal number 10 with the main Goal of
                <strong>reducing inequality within and among countries</strong>
                and created a visualization for it. I experimented with different
                techniques until I found a way to represent the inequalities mentioned
                in Goal 10. One of the United Nations' "17 Sustainable Development
                Goals" is to reduce inequality, numbered as Goal 10.
            </p>

            <div>
                <p>
                    This chart compares four countries on each continent. The
                    right-hand circle of each continent shows the growth rates
                    of the bottom 40 percent of the population and the left-hand
                    circle shows the growth of the total population. Income
                    growth is estimated using individual income data or
                    individual consumption data over a period of about five
                    years between 2009 and 2017.
                </p>
            </div>

            <div>
                <h4>Tech Stack</h4>
                <ul class="list">
                    <li>Adobe Illustrator</li>
                    <li>Tableau and Excel</li>
                    <li>Procreate</li>
                </ul>
            </div>

            <div>
                <h4>Contribution</h4>
                <ul class="list">
                    <li>
                        Concept, Research, Design - <strong>Simon Müller</strong
                        >
                    </li>
                </ul>
            </div>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="right">
        <div class="images right">
            <img
                src="/projects/global-income-growth/global-income-growth-1.png"
                alt=""
            />
            <img
                src="/projects/global-income-growth/global-income-growth-2.jpg"
                alt=""
            />
            <img
                src="/projects/global-income-growth/global-income-growth-3.jpg"
                alt=""
            />
            <img
                src="/projects/global-income-growth/global-income-growth-4.jpg"
                alt=""
            />
        </div>
    </svelte:fragment>
</WorkLayout>
