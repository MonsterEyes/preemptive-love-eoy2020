import { useRef, useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SimpleCenteredSection.scss';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

function SimpleCenteredSection(props) {
    const SimpleCenteredSectionRef = useRef(null);
    const SimpleCenteredContentRef = useRef(null);
    const body1 = useRef(null);
    const body2 = useRef(null);
    const body3 = useRef(null);

    useEffect(() => {
        let timelineCenter = gsap.timeline({
            scrollTrigger: {
                trigger: SimpleCenteredSectionRef.current,
                start: "top bottom",
                end: "bottom top",
                markers: false,
                scrub: true,
                id: "Timeline Two",

            }
        });

        timelineCenter.to(
            [SimpleCenteredContentRef.current],
            { y: 150, },
            0
        )
        timelineCenter.to(
            [body3.current],
            { y: -30, },
            0
        )

    }, [body1, body2, body3, SimpleCenteredContentRef, SimpleCenteredSectionRef]);


    return (
        <section ref={SimpleCenteredSectionRef} className="simple-centered-section">
            <div ref={SimpleCenteredContentRef} className="content-container uppercase">
                <p>
                    <span className="body1 header" ref={body1}>{props.body1} </span><br />
                    <span className="body2 header" ref={body2}>{props.body2} </span>
                </p>
                <h2 className="body3 header-cond " ref={body3}>{props.body3}</h2>
            </div>
        </section>

    );
}

export default SimpleCenteredSection;