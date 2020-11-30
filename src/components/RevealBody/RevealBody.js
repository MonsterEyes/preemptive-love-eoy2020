import React, { useRef, useEffect } from "react";
import { gsap, Power2, Power1 } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RevealBody.scss';
import ReadMore from "./components/ReadMore/ReadMore"
//import Accordion from "../Accordion/Accordion";

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}


function RevealBody(props) {
    const revealSection = useRef(null);
    const image1 = useRef(null);
    const image2 = useRef(null);
    const image3 = useRef(null);
    const pRef = useRef(null);
    const body1 = useRef(null);
    const body2 = useRef(null);
    const ReadRef = useRef(null);
    const progressRef = useRef(null);
    let timeline = null
    let timelineTwo = null

    let pScroll = "-50px"
    let image1Scroll = "-500px"
    let image1ScaleStart = .8
    let image1ScaleEnd = 1
    if (window.innerWidth < 768) {
        image1Scroll = "30px"
        pScroll = "-150px"
        //image1ScaleStart = 1.3
        //image1ScaleEnd = 1.5
    }


    useEffect(() => {

        const debouncedHandleResize = debounce(function handleResize() {
            //window.location.href = window.location.href
            window.location = window.location.href;
        }, 500)

        window.addEventListener('resize', debouncedHandleResize)

        //Sequence
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: revealSection.current,
                //start: "center bottom" and end: "center top"
                start: "center center",
                pin: true,
                end: "bottom top",
                markers: false,
                scrub: true,
                id: "center timeline",
            },
            ease: Power2.easeInOut
        });
        timeline.fromTo(
            [body1.current],
            { opacity: 0, scale: .8 },
            { opacity: 1, scale: 1 }
        )
        timeline.fromTo(
            [image1.current],
            { opacity: 0, scale: .8 },
            { opacity: 1, scale: 1 }
            , '-=.5'
        )

        timeline.fromTo(
            [image1.current],
            { scale: 1, opacity: 1, },
            { scale: 1.04, opacity: .85, },

        )
        timeline.fromTo(
            [body2.current],
            { opacity: 0, scale: .8 },
            { opacity: 1, scale: 1 },
            '-=.5'
        )

        ///redo for mobile
        timeline.fromTo(
            [image2.current],
            { y: "100px", opacity: 0, scale: image1ScaleStart },
            { y: "0px", opacity: 1, scale: image1ScaleEnd, },
            '-=.5'
        )

        timeline.fromTo(
            [ReadRef.current],
            { opacity: 0, },
            { opacity: 1, },
            '-=.4'
        )


        //Entire Time, all objects set with start 0
        let timelineTwo = gsap.timeline({
            scrollTrigger: {
                trigger: revealSection.current,
                start: "center center",
                end: "bottom top",
                markers: false,
                scrub: true,
                id: "center timeline",

            }
        });
        timelineTwo.to(
            [pRef.current],
            { y: pScroll, },
            0
        )
        timelineTwo.fromTo(
            [progressRef.current],
            { scaleY: .1 },
            { scaleY: 10 },
            0
        )
        timelineTwo.to(
            [image1.current],
            {
                y: image1Scroll, ease: Power1.easeIn,
            },

            0
        )

        //The end
        let timelineThree = gsap.timeline({
            scrollTrigger: {
                trigger: revealSection.current,
                start: "bottom 99%",
                end: "bottom",
                markers: false,
                scrub: true,
                id: "after timeline",

            }
        });
        timelineThree.to(
            [image2.current],
            { y: "100px", opacity: 1, scale: 1.2, }
        )



    }, [timeline, image1, image2, image3, pRef, body1, body2, ReadRef, image1ScaleEnd, image1ScaleStart, timelineTwo, image1Scroll, pScroll]);


    return (
        <section ref={revealSection} className={`reveal-section reveal-section-${props.index} `}>

            <div className="content-container">
                <div className="reveal-body">
                    <div ref={pRef} className={`pClass ${props.pcolor} `}>

                        <p>
                            <span ref={body1}>{props.body1} </span><br />
                            <span ref={body2} className="header">{props.body2} </span>
                        </p>

                        <div ref={ReadRef}>
                            <span className="dollar-handle">{props.dollarHandle}</span>
                            <ReadMore readMore={props.readMore} />
                        </div>

                    </div>
                    <div className={`progress ${props.pcolor} `} ref={progressRef}></div>

                    <div className="image-container">
                        <img ref={image1} className="image1" src={props.img1} alt={props.alt1} />
                        <img ref={image2} src={props.img2} alt={props.alt2} />
                    </div>



                </div>

            </div>

        </section>
    );
}

export default RevealBody;