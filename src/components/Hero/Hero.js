import React, {
    useRef,
    useEffect,
} from "react";
import './Hero.scss';
import gsap from 'gsap'
import ReactPlayer from "react-player";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/RemakeHeaderv03.json";

import backgroundImage from '../../assets/images/mosul-lg2.jpg';
import backgroundImagexlg from '../../assets/images/mosul-xlg2.jpg';
import backgroundImageSm from '../../assets/images/mosul-sm.jpg';
import VideoStill from '../../assets/images/sample-video-pick.jpg';
import PlayButton from '../../assets/images/icons/play.svg';
import VideoTeaser from '../../assets/videos/EOY-Teaser.mp4';

const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function Hero() {

    const HeroRef = useRef(null);
    const introTextRef = useRef(null);
    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null);
    const video = useRef(null);
    const VideoStillContainerRef = useRef(null);

    const lottieRef = useRef();

    const timeline = gsap.timeline({ repeat: 0 });
    const timelineEarth = gsap.timeline({ repeat: 0 });

    let earthImage = backgroundImage
    let videoYEnd = 150
    let lottieSize = 100
    if (window.innerWidth < 580) {
        earthImage = backgroundImageSm
        videoYEnd = 130
    }
    if (window.innerWidth > 1200) {
        earthImage = backgroundImagexlg
    }
    if (window.innerWidth < 400) {
        lottieSize = 50
    }

    useEffect(() => {

        //On Load Text and Content Sequence
        timeline.fromTo(
            ".hero-text",
            { y: "10px", opacity: 0 },
            { y: "0px", opacity: 1, stagger: .85 },

            "+=1"
        );
        timeline.add(() => lottieRef.current.play())

        timeline.fromTo(
            [VideoStillContainerRef.current],
            { scale: .9, opacity: 0, },
            { scale: 1, opacity: 1, duration: 2, repeat: 0 }
        )
        //timeline.add(() => lottieRef.current.pause(), "+=.5")


        //Earth
        timelineEarth.fromTo(
            [video.current],
            { opacity: 0, },
            { opacity: 1, repeat: 0, duration: 7 }
        )


        //Scroll
        let timelineScroll = gsap.timeline({
            scrollTrigger: {
                trigger: HeroRef.current,
                start: "center center",
                end: "bottom top",
                markers: false,
                scrub: true,
                id: "timelineScroll timeline",
                pinReparent: true,

            }
        });
        timelineScroll.to(
            [VideoStillContainerRef.current],
            { y: videoYEnd }
        )

    }, [timeline, timelineEarth, introTextRef, videoYEnd]);



    return (
        <div className="Hero" ref={HeroRef}>

            <div ref={video} className='videoTag'>
                <img src={earthImage} alt="background of earth" />
            </div>

            <div className="content">
                <div>

                    <p className="intro-text header-cond uppercase" ref={introTextRef}>
                        <span ref={one} className="hero-text">After the pandemic, </span>
                        <span ref={two} className="hero-text">After the election, </span><br />
                        <span ref={three} className="hero-text">After the violence and upheaval of 2020.</span><br />
                        <span ref={three} className="hero-text header-start">You can</span>

                    </p>

                    <div className="controlled">
                        <Lottie
                            options={defaultOptions}
                            height={lottieSize}
                            loop={false}
                            ref={lottieRef}
                        />
                    </div>
                </div>
            </div>


            <div ref={VideoStillContainerRef} className="video-player-container">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=T5EDH_cB4J8"
                    width="100%"
                    className="videoWrapper"
                    playing
                    playIcon={window.innerWidth > 580 ? <div dangerouslySetInnerHTML={{
                        __html: `
                                                <img src="${PlayButton}" alt="video play" class="play-icon" />
                                                
                                                    <video
                                                        width="100%" height="auto"
                                                    loop
                                                    muted
                                                    autoplay
                                                    playsinline
                                                    src="${VideoTeaser}"
                                                    class="video-teaser"
                                                    />,
                                                    
                                                ` }}></div> : <img src={PlayButton} alt="video play" class="play-icon" />}
                    light={VideoStill}
                />
            </div>

        </div >
    );

}

export default Hero;