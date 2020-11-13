import React, { useRef, useEffect } from "react";
import './Hero.scss';
import gsap from 'gsap'
//import { TweenMax } from "gsap";
import ReactPlayer from "react-player";


import backgroundImage from '../../assets/images/earth.jpg';
import backgroundImageSm from '../../assets/images/earth-sm.jpg';
import VideoStill from '../../assets/images/sample-video-pick.png';
import PlayButton from '../../assets/images/play.svg';
import VideoTeaser from '../../assets/videos/To End War Silent Reel.mp4';


function Hero() {
    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null);
    const headline = useRef(null);
    const video = useRef(null);
    const VideoStillContainerRef = useRef(null);

    const timeline = gsap.timeline({ repeat: 0 });
    const timelineEarth = gsap.timeline({ repeat: 0 });

    let earthImage = backgroundImage
    if (window.innerWidth < 400) {
        earthImage = backgroundImageSm
    }




    useEffect(() => {
        // TweenMax.fromTo(
        //     [one.current, two.current, three.current],
        //     0.5,
        //     { y: "50px", opacity: 0 },
        //     { y: "0px", opacity: 1, yoyo: true, repeat: -1 }
        // );
        timeline.fromTo(
            ".hero-text",
            { y: "50px", opacity: 0 },
            { y: "0px", opacity: 1, stagger: 1.5 },

            "+=1"
        );

        timeline.fromTo(
            [headline.current],
            { scale: .9, opacity: 0 },
            { scale: 1, opacity: 1, repeat: 0, duration: 2, }
        )
        timeline.fromTo(
            [VideoStillContainerRef.current],
            { scale: .9, opacity: 0, marginTop: -80 },
            { scale: 1, opacity: 1, marginTop: -100, duration: 2, repeat: 0 },
            "=-2"
        )

        timelineEarth.fromTo(
            [video.current],
            { opacity: 0 },
            { opacity: 1, repeat: 0, duration: 9 }
        )
    }, [timeline]);



    return (
        <div className="Hero">




            {/* <video ref={video} className='videoTag' autoPlay loop muted>
                <source src={backgroundVideo} type='video/mp4' />
            </video> */}
            <div ref={video} className='videoTag'>
                <img src={earthImage} alt="background of earth" />
            </div>

            <div className="content">
                <div>
                    <p className="intro-text">
                        <span ref={one} className="hero-text">After the pandemic. </span>
                        <span ref={two} className="hero-text">After the election. </span><br />
                        <span ref={three} className="hero-text">After the violence and upheaval of 2020.</span>
                    </p>

                    <h1 ref={headline}>REMAKE OUR WORLD</h1>
                </div>

            </div>



            <div ref={VideoStillContainerRef} className="video-player-container">


                <ReactPlayer
                    url="https://www.youtube.com/watch?v=T5EDH_cB4J8"
                    width="100%"
                    height="405px"
                    className="videoWrapper"
                    playing
                    playIcon={<div dangerouslySetInnerHTML={{
                        __html: `
                        <img src="${PlayButton}" alt="video play" class="play-icon" />
                            <video
                                width="720" height="405"
                            loop
                            muted
                            autoplay
                            playsinline
                            src="${VideoTeaser}"
                            class="video-teaser"
                            />,
                            
                        ` }}></div>
                    }
                    light={VideoStill}
                />

            </div>





        </div>
    );
}

export default Hero;



// After the pandemic. After the election. 
//REMAKE OUR WORLD