import React, { useRef, useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SimpleCenteredSection.scss';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}


function SimpleCenteredSection(props) {
    const SimpleCenteredSectionRef = useRef(null);
    const body1 = useRef(null);
    const body2 = useRef(null);
    const body3 = useRef(null);

    useEffect(() => {

        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: SimpleCenteredSectionRef.current,
                start: "top bottom",
                end: "bottom top",
                markers: false,
                scrub: true,
                id: "center timeline",

            }
        });

        let timelineTwo = gsap.timeline({
            scrollTrigger: {
                trigger: SimpleCenteredSectionRef.current,
                start: "top bottom",
                end: "bottom top",
                markers: true,
                scrub: true,
                id: "Timeline Two",

            }
        });


        timeline.fromTo(
            [SimpleCenteredSectionRef.current],
            { backgroundSize: '115%' },
            { backgroundSize: '100%' },
        )

        timelineTwo.fromTo(
            [body1.current],
            { fontSize: "2vw" },
            { fontSize: "3vw" }
        )


    }, [body1, body2, body3, SimpleCenteredSectionRef]);


    return (
        <section ref={SimpleCenteredSectionRef} className="simple-centered-section">
            <div className="content-container">
                <h2>
                    <span ref={body1}>{props.body1} </span><br />
                    <span ref={body2}>{props.body2} </span>
                    <span ref={body3}>{props.body3} </span>
                </h2>
            </div>
        </section>

    );
}

export default SimpleCenteredSection;