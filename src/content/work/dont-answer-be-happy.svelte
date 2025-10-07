<script context="module">
    import previewImage from "$lib/assets/projects/dont-answer-be-happy/Bild-WWWerkschau-5.jpg?enhanced";
    
    export const metadata = {
        id: 0,
        title: "Don't Answer Be Happy",
        tags: "installation",
        image: previewImage,
        date: "2023-05-01",
    };
</script>

<script>
    import WorkLayout from "$lib/layouts/WorkLayout.svelte";
    
    // Import all images with enhanced processing
    import heroImage from "$lib/assets/projects/dont-answer-be-happy/Bild-WWWerkschau-1.jpg?enhanced";
    import image2 from "$lib/assets/projects/dont-answer-be-happy/Bild-WWWerkschau-2.jpg?enhanced";
    import image3 from "$lib/assets/projects/dont-answer-be-happy/Bild-WWWerkschau-3.jpg?enhanced";
    import image4 from "$lib/assets/projects/dont-answer-be-happy/Bild-WWWerkschau-4.jpg?enhanced";
    import image5 from "$lib/assets/projects/dont-answer-be-happy/Bild-WWWerkschau-5.jpg?enhanced";
    import image6 from "$lib/assets/projects/dont-answer-be-happy/Bild-WWWerkschau-6.jpg?enhanced";
    import image7 from "$lib/assets/projects/dont-answer-be-happy/Bild-WWWerkschau-7.jpg?enhanced";
    import image8 from "$lib/assets/projects/dont-answer-be-happy/Bild-WWWerkschau-8.jpg?enhanced";
    import mappingImage from "$lib/assets/projects/dont-answer-be-happy/Mapping_Festival_1.jpg?enhanced";
    import techstackImage from "$lib/assets/projects/dont-answer-be-happy/techstack.jpg?enhanced";
</script>

<WorkLayout>
    <svelte:fragment slot="left">
        <enhanced:img
            class="heroimage"
            src={heroImage}
            alt="Don't Answer Be Happy installation"
        />

        <div class="infos">
            <h3 class="title">Don't Answer Be Happy</h3>

            <p>
                The installation <italic>Don't Answer Be Happy</italic> creates an
                interactive experience in which everything revolves around the personal
                smartphone. Engrossed in a conversation between their own personal
                smartphone and the surrounding artificial intelligence, visitors
                are compelled to take a stand. Confrontations with the ambivalence
                of digital reality arise, and evasion is not possible. The experienced
                space reflects upon the digital colonization regarding people and
                regions of this world outside of global tech hotspots.
            </p>

            <div class="special">
                <h4>Featured at Mapping Festival 2023</h4>
                <p>
                    <italic>Don't Answer Be Happy</italic> was exhibited at the
                    <a
                        href="https://mappingfestival.com/en/project/9/Dont%20Answer%20Be%20Happy"
                        target="_blank"
                    >
                        Mapping Festival 2023
                    </a>
                    in Geneva. For this reason, RTS produced a report on this project,
                    which was broadcast on the most important news program in the
                    Romandie.
                </p>

                <iframe
                    src="https://www.rts.ch/play/embed?urn=urn:rts:video:14052192&subdivisions=false"
                    allowfullscreen
                    allow="geolocation *; autoplay; encrypted-media"
                ></iframe>

                <figcaption>
                    This video is in French. The article with further content is
                    available here:
                    <a
                        href="https://www.rts.ch/info/culture/14053549-le-mapping-festival-interroge-notre-relation-a-la-technologie.html"
                        target="_blank">rts.ch</a
                    >
                </figcaption>
            </div>

            <div>
                <h4>Personal contribution</h4>
                <p>
                    Together with Jonas Wolter I developed the whole concept of
                    this interactive installation. In fact, we developed
                    everything together in close exchange. We iterated on the
                    concept and content and created a proper design system. For
                    the programming I focused more on the web application, the
                    server and the real-time communication between these.
                </p>
            </div>

            <div>
                <h4>Tech Stack</h4>
                <ul class="list">
                    <li>TouchDesigner</li>
                    <li>MadMapper</li>
                    <li>MaxMsp</li>
                    <li>SvelteKit</li>
                    <li>Socket.io</li>
                    <li>P5.js</li>
                    <li>Express.js</li>
                </ul>
            </div>

            <iframe
                width="100%"
                src="https://www.youtube-nocookie.com/embed/7n1KBsXx-IU?modestbranding=1&amp;cc_load_policy=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen=""
            ></iframe>

            <div>
                <h4>Background</h4>
                <p>
                    Conceptually the installation addresses the discourse of
                    globalized technology and peeks behind the curtain of the
                    hype surrounding artificial intelligence. In essence, it's
                    about how technological developments have an impact on our
                    society and what this means for different regions and
                    peoples of this world. Many tech solutions that have become
                    indispensable in the global North and which we have become
                    accustomed to, can only exist through the systematic
                    exploitation of the global South. Without the major
                    discrepancy in income and living conditions, we would not be
                    able to live out this (in our case) tech luxury to this
                    extent. The installation <italic
                        >Don't Answer Be Happy</italic
                    > focuses on the people who make Western tech luxury possible
                    in the first place through their daily work in precarious conditions,
                    be it clickwork in the creation of datasets that serve as the
                    basis for AI algorithms, in content moderation, in the production
                    of electronic devices or in their recycling. In the Congo, people
                    are exploited to extract gold and cobalt for our smartphones.
                    In China, workers have to assemble electronic devices which they
                    could never afford due to non livable wages. In order for us
                    to use social media without images of violence and abuse, people
                    have to categorize images of violence, racism, and sexual assault
                    every day. AI systems are only highly "intelligent" because they
                    have been trained by thousands of clickworkers in India. However
                    for us living in the global North, this side of digital reality
                    is not largely visible.
                </p>
            </div>

            <div>
                <h4>Awards</h4>
                <ul class="list">
                    <li>Official selection of the Mapping Festival Geneva</li>
                    <li>
                        Nomination Alumni Award Lucerne School of Art and Design
                    </li>
                </ul>
            </div>

            <div>
                <h4>Narration</h4>
                <p>
                    In the installation <italic>Don't Answer Be Happy</italic> we
                    have developed a narrative around the personal smartphone, which
                    deals with the issues described previously. The smartphone is
                    the focal point and the depicting element that perfectly represents
                    the difficulties created by technological globalization and digital
                    colonization. In the installation the role of the visitor is
                    inverted. The visitor is degraded to a clickworker and only acts
                    as an extended arm of the smartphone. The smartphone develops
                    an intelligence, but does not understand the irrationality and
                    contradictory nature of human interaction with technology and
                    begins to ask naive questions to its user. The visitor is confronted
                    with questions and is required to take a stance.
                </p>
            </div>

            <div>
                <h4>Interaction</h4>
                <p>
                    The smartphone as the focal point of the different conflicts
                    is also the interactive element. A new type of interaction
                    was specifically developed for this installation, based on
                    gyroscope data of the smartphone, which is accessed via a
                    web application. All visual and auditory experiences in the
                    space are based on the rotation of the smartphone. The
                    visitor also provides answers to the questions by pointing
                    the smartphone at different projections, resulting in an
                    immersive experience.
                </p>
            </div>

            <figure>
                <enhanced:img
                    src={techstackImage}
                    alt="Technology overview"
                />
                <figcaption>Technology overview</figcaption>
            </figure>

            <div>
                <h4>Credits</h4>
                <ul class="list">
                    <li>
                        Concept, Design, Programming, Setup - <strong
                            >Jonas Wolter, Simon Müller</strong
                        >
                    </li>
                    <li>Sound Design - <strong>Said Boulacen</strong></li>
                </ul>
            </div>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="right">
        <div class="images right">
            <enhanced:img
                src={image2}
                alt=""
            />
            <enhanced:img
                src={image3}
                alt=""
            />
            <enhanced:img
                src={image4}
                alt=""
            />
            <enhanced:img
                src={image5}
                alt=""
            />
            <enhanced:img
                src={image6}
                alt=""
            />
            <enhanced:img
                src={heroImage}
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
                src={mappingImage}
                alt=""
            />
        </div>
    </svelte:fragment>
</WorkLayout>
