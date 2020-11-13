import React, { useRef, useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FormSection.scss';
import formImage from '../../assets/images/form-image.jpg';


if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
}


function FormSection(props) {
    const FormSectionRef = useRef(null);
    const formRef = useRef(null);
    const body1 = useRef(null);
    const image1 = useRef(null);
    //let timeline = null

    useEffect(() => {

        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: FormSectionRef.current,
                start: "top bottom",
                end: "+=500",
                markers: true,
                scrub: true,
                id: "Form timeline",

            }
        });
        timeline.fromTo(
            [body1.current],
            { opacity: 0, scale: .9 },
            { opacity: 1, scale: 1 },
            0
        )

        timeline.fromTo(
            [image1.current],
            { opacity: 0, scale: .9 },
            { opacity: 1, scale: 1, delay: .2 },
            0
        )

        timeline.fromTo(
            [formRef.current],
            { opacity: .5, y: 50 },
            { opacity: 1, y: 0, delay: .4 },
            0
        )


    }, [body1, image1]);


    return (
        <section ref={FormSectionRef} className="form-section">
            <div className="content-container">

                <div ref={formRef} className="formside">
                    <div className="fake-form">
                        Form goes here
                    </div>

                </div>

                <div className="form-body">
                    <p ref={body1}>
                        {props.body1}
                    </p>
                    <img ref={image1} className="image1" src={formImage} alt={props.alt1} />
                </div>
            </div>
        </section>

    );
}

export default FormSection;