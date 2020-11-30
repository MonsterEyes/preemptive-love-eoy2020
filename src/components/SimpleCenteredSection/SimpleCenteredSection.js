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
            [body1.current],
            { y: 100, },
            0
        )
        timelineCenter.fromTo(
            [SimpleCenteredContentRef.current],
            { opacity: .6, },
            { opacity: 1, },
            0
        )



    }, [body1, body2, body3, SimpleCenteredContentRef, SimpleCenteredSectionRef]);


    return (
        <section ref={SimpleCenteredSectionRef} className="simple-centered-section">
            <div ref={SimpleCenteredContentRef} className="content-container">
                <p>
                    <span className="body1" ref={body1}>{props.body1} </span><br />
                    <span className="body2" ref={body2}>{props.body2} </span>
                </p>
                <h2 className="body3" ref={body3}>{props.body3}</h2>
            </div>
        </section>

    );
}

export default SimpleCenteredSection;