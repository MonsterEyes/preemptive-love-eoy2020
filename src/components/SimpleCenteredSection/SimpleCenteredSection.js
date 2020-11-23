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



        timelineCenter.fromTo(
            [body1.current],
            { fontSize: "2.8vw", y: "0", },
            { fontSize: "3vw", y: "200px", }
        )


    }, [body1, body2, body3, SimpleCenteredSectionRef]);


    return (
        <section ref={SimpleCenteredSectionRef} className="simple-centered-section">
            <div className="content-container">
                <p>
                    <span ref={body1}>{props.body1} </span><br />
                    <span ref={body2}>{props.body2} </span>
                </p>
                <h2 ref={body3}>{props.body3}</h2>
            </div>
        </section>

    );
}

export default SimpleCenteredSection;