import React, { useRef, useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Nav.scss';

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}


function Nav(props) {
    const NavRef = useRef(null);
    const navButton = useRef(null);
    const logoImage = useRef(null);


    useEffect(() => {
        let timeline = gsap.timeline();
        timeline.fromTo(NavRef.current, { opacity: 0 }, { duration: 1, opacity: 1 });

        ScrollTrigger.create({
            start: 'top -80',
            end: 99999,
            toggleClass: { className: 'scrolled', targets: NavRef.current }
        });

    }, [navButton, logoImage]);

    return (
        <nav ref={NavRef} >
            <div className="content-container">
                <img ref={logoImage} className="logo-image" src={props.img1} alt={props.alt1} />
                <button ref={navButton}>
                    Donate
                </button>
            </div>
        </nav>
    );
}

export default Nav;