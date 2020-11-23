import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RevealBody.scss';

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
    const body3 = useRef(null);
    const progressRef = useRef(null);
    let timeline = null
    let timelineTwo = null

    let pScroll = "-50px"
    let image1Scroll = "-500px"
    if (window.innerWidth < 768) {
        //pScroll = "50px"
        image1Scroll = "-300px"
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
                start: "center center",
                pin: true,
                end: "bottom top",
                markers: false,
                scrub: true,
                id: "center timeline",
                pinReparent: true,
            },
            ease: Power3.easeInOut
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
            { scale: 1.04, opacity: .6, },

        )
        timeline.fromTo(
            [body2.current],
            { opacity: 0, scale: .8 },
            { opacity: 1, scale: 1 },
            '-=.5'
        )
        timeline.fromTo(
            [image2.current],
            { y: "100px", opacity: 0, scale: .8 },
            { y: "0px", opacity: 1, scale: 1, },
            '-=.5'
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
        timelineTwo.fromTo(
            [pRef.current],
            { y: "0", },
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
            { y: image1Scroll, },
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



    }, [timeline, image1, image2, image3, pRef, body1, body2, body3, timelineTwo, image1Scroll, pScroll]);


    return (
        <section ref={revealSection} className={`reveal-section reveal-section-${props.index} `}>
            <div className="content-container">
                <div className="reveal-body">


                    <p ref={pRef} className={`pClass ${props.pcolor} `}>

                        <span ref={body1}>{props.body1} </span><br />
                        <span className="header" ref={body2}>{props.body2} </span>
                        {/* <span ref={body3}>{props.body3} </span> */}


                    </p>
                    {/* <p style={{ fontSize: 40 }}>
                        Imagine digging through scraps of garbage to feed your kids. Thousands of families face daily hunger—whether it’s because a pandemic plunged their refugee camp into lockdown, or an explosion plunged their city into chaos, or economic collapse plunged their entire country into what is now becoming the world’s biggest crisis.
                            <br /><br />
                            We are on the ground with food. For refugees in Iraq and Mexico. For our friends in Beirut. For starving families in Venezuela.
                            <br /><br />
                            We’re reinventing the way families get the help they need. We’re not like other aid groups—we are fast in a crisis. We don’t stay on the margins. We press in, to the frontlines. And we don’t outsource our work to expats. We lead with local teams who know the people, who know the needs, and who know what works.
                            <br /><br />
                            We’re only able to do all this because of you. You’re the reason we can rush food to refugees in quarantine before anyone else. Why we could start feeding	 people within 24 hours of the Beirut blast. You enable us to exhaust every means, even when it means going on foot, to reach starving families in Venezuela.
                            <br /><br />
                            You can give food that families can eat now. Food they can grow for themselves. Food as a lifeline when the whole world erupts.
                            <br /><br />
                            You can remake our world, one meal at a time.

                        </p> */}

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