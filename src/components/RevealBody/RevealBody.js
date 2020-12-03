import React, { useState, useRef, useEffect } from "react";
import { gsap, Power2, Power1 } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './RevealBody.scss';
//import ReadMore from "./components/ReadMore/ReadMore"

//import './ReadMore.scss';
import CloseIcon from '../../assets/images/icons/close circle fill.svg'
//import CloseIcon from '../../../assets/images/icons/close circle fill.svg';

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
    const pRef = useRef(null);
    const body1 = useRef(null);
    const body2 = useRef(null);
    const ReadRef = useRef(null);
    const progressRef = useRef(null);
    let timeline = null
    let timelineTwo = null

    let pScroll = "-50px"
    let image1Scroll = "-350px"
    let image1ScaleStart = .8
    let image1ScaleEnd = 1
    let image2YScroll = "150px"
    if (window.innerWidth < 768) {
        image1Scroll = "50px"
        pScroll = "-120px"
        image2YScroll = "200px"
    }

    const ReadMorePRef = useRef(null);
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    useEffect(() => {

        //reload the page if the window was resized to allow gsap to get new values, this has been disabled on mobile because of how iphone resizes the window after the first scroll
        const debouncedHandleResize = debounce(function handleResize() {
            if (window.innerWidth > 768) {
                window.location = window.location.href;
            }
        }, 500)
        window.addEventListener('resize', debouncedHandleResize)



        //Sequence
        let timeline = gsap.timeline({
            y: (i, target) => -2000 * .009,
            scrollTrigger: {
                trigger: revealSection.current,
                start: "center center",
                pin: true,
                end: "+=1000",
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
                end: "+=1200",
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
            { y: image2YScroll, opacity: 1, scale: 1.2, }
        )



    }, [timeline, image1, image2, pRef, body1, body2, ReadRef, image1ScaleEnd, image1ScaleStart, timelineTwo, image1Scroll, pScroll, image2YScroll]);


    return (
        <section key={"_key" + props.id} ref={revealSection} className={`reveal-section reveal-section-${props.index} `}>

            <div className="content-container">
                <div className="reveal-body">
                    <div ref={pRef} className={`pClass ${props.pcolor} `}>

                        <p>
                            <span ref={body1} className="header">{props.body1} </span><br />
                            <span ref={body2} className="header colored">{props.body2} </span>
                        </p>

                        <div ref={ReadRef}>
                            <span className="header dollar-handle">{props.dollarHandle}</span>
                            <div className={isActive ? "not-active" : "active"}>
                                <div className="read-more-container">
                                    <button className="read-more-button header" onClick={handleToggle}>
                                        Read More
                    <svg className={isActive ? "not-active" : "active"} xmlns="http://www.w3.org/2000/svg" width="20.201" height="20.201" viewBox="0 0 20.201 20.201">
                                            <path id="circle_arrow_right2" data-name="circle arrow right2" d="M10.1,0A9.9,9.9,0,0,0,6.165.789,10.054,10.054,0,0,0,.789,6.165,9.9,9.9,0,0,0,0,10.1a9.9,9.9,0,0,0,.789,3.936,10.054,10.054,0,0,0,5.376,5.376A9.9,9.9,0,0,0,10.1,20.2a9.9,9.9,0,0,0,3.936-.789,10.054,10.054,0,0,0,5.376-5.376A9.9,9.9,0,0,0,20.2,10.1a9.9,9.9,0,0,0-.789-3.936A10.054,10.054,0,0,0,14.036.789,9.9,9.9,0,0,0,10.1,0Zm4.123,10.653-3.571,3.571a.628.628,0,1,1-.888-.888l2.6-2.6H5.681a.631.631,0,0,1,0-1.263h6.688l-2.6-2.6a.6.6,0,0,1,0-.888.6.6,0,0,1,.888,0l3.571,3.571a.588.588,0,0,1,.158.266.528.528,0,0,1,0,.286.528.528,0,0,1,0,.286A.588.588,0,0,1,14.223,10.653ZM20.2,18.938" fill="#0c1014" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="read-more-container">
                            <p ref={ReadMorePRef} className={`read-more-content ${isActive ? "not-active" : "active"}`}>
                                {props.readMore}
                                <button className="close-button" onClick={handleToggle}>
                                    <span className="button-content">
                                        <span className="header">Close </span><img src={CloseIcon} alt="button" />
                                    </span>
                                </button>
                            </p>
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