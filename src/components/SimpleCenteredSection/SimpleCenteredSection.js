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
    let timeline = null

    // useEffect(() => {

    //     let timeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: SimpleCenteredSectionRef.current,
    //             start: "center center",
    //             end: "bottom top",
    //             markers: true,
    //             scrub: true,
    //             id: "center timeline",

    //         }
    //     });
    //     timeline.fromTo(
    //         [body1.current],
    //         { opacity: 0, scale: .8 },
    //         { opacity: 1, scale: 1 }
    //     )

    //     timeline.fromTo(
    //         [body2.current],
    //         { opacity: 0, scale: .8 },
    //         { opacity: 1, scale: 1 }
    //     )


    // }, [timeline, body1, body2, body3]);


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