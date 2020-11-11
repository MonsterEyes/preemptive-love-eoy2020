import React, { useRef, useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RevealBody.scss';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}


function RevealBody(props) {
    const revealSection = useRef(null);
    const image1 = useRef(null);
    const image2 = useRef(null);
    const image3 = useRef(null);
    const pRef = useRef(null);
    const body1 = useRef(null);
    const body2 = useRef(null);
    const body3 = useRef(null);
    const progressRef = useRef(null);
    let timeline = null
    let timelineTwo = null
    let timelineThree = null





    useEffect(() => {

        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: revealSection.current,
                start: "center center",
                pin: true,
                end: "bottom top",
                markers: true,
                scrub: true,
                id: "center timeline",
                pinReparent: true,

            }
        });
        timeline.fromTo(
            [body1.current],
            { opacity: 0, scale: .8 },
            { opacity: 1, scale: 1 }
        )
        timeline.fromTo(
            [image1.current],
            { y: "0", opacity: 0, scale: .8 },
            { y: "-150px", opacity: 1, scale: 1 }
            , '-=.5'
        )

        timeline.fromTo(
            [image1.current],
            { y: "-150px", scale: 1, opacity: 1, },
            { y: "-300px", scale: 1.2, opacity: 0, },

        )
        timeline.fromTo(
            [body2.current],
            { opacity: 0, scale: .8 },
            { opacity: 1, scale: 1 }
        )
        timeline.fromTo(
            [image2.current],
            { y: "100px", opacity: 0, scale: .8 },
            { y: "0px", opacity: 1, scale: 1, },
            '-=.5'
        )


        // timeline.fromTo(
        //     [body3.current],
        //     { opacity: 0, scale: .8 },
        //     { opacity: 1, scale: 1, delay: 1 }
        // )
        // timeline.fromTo(
        //     [image3.current],
        //     { y: "100px", opacity: 0, scale: .8 },
        //     { y: "0px", opacity: 1, scale: 1, }
        // )

        let timelineTwo = gsap.timeline({
            scrollTrigger: {
                trigger: revealSection.current,
                start: "center center",
                end: "bottom top",
                markers: true,
                scrub: true,
                id: "center timeline",

            }
        });

        timelineTwo.fromTo(
            [progressRef.current],
            { scaleY: .1 },
            { scaleY: 10 }
        )


        let timelineThree = gsap.timeline({
            scrollTrigger: {
                trigger: revealSection.current,
                start: "center center",
                end: "bottom top",
                markers: true,
                scrub: true,
                id: "center timeline",

            }
        });

        timelineThree.fromTo(
            [pRef.current],
            { y: "0", },
            { y: "-50px", }
        )




    }, [timeline, image1, image2, image3, pRef, body1, body2, body3, timelineTwo, timelineThree]);


    return (
        <section ref={revealSection} className={`reveal-section reveal-section-${props.index} `}>
            <div className="content-container">
                <div className="reveal-body">


                    <p ref={pRef} className={`pClass ${props.pcolor} `}>

                        <span ref={body1}>{props.body1} </span><br />
                        <span className="header" ref={body2}>{props.body2} </span>
                        {/* <span ref={body3}>{props.body3} </span> */}

                    </p>

                    <div className="image-container">

                        <img ref={image1} className="image1" src={props.img1} alt={props.alt1} />

                        <img ref={image2} src={props.img2} alt={props.alt2} />

                        {/* <img ref={image3} src={props.img3} alt={props.alt3} /> */}
                    </div>

                    <div className="progress" ref={progressRef}></div>


                </div>
            </div>

        </section>

    );
}

export default RevealBody;



// After the pandemic. After the election. 
//REMAKE OUR WORLD