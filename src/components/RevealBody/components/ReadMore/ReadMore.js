import { useState, useRef } from "react";
import './ReadMore.scss';


import CircleIcon from '../../../../assets/images/icons/circle arrow right2.svg';
import CloseIcon from '../../../../assets/images/icons/close circle fill.svg';

export default function App(props) {
    const ReadMorePRef = useRef(null);
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div className={isActive ? "not-active" : "active"}>
            <div className="read-more-container">
                <button className="read-more-button" onClick={handleToggle}>
                    Read More <img src={CircleIcon} className={isActive ? "not-active" : "active"} alt="open" />
                </button>

                <p ref={ReadMorePRef} className={isActive ? "not-active" : "active"}>
                    {props.readMore}



                    test
                    <button className="close-button" onClick={handleToggle}>
                        <span className="button-content">
                            <span className="header">Close </span><img src={CloseIcon} alt="button" />
                        </span>
                    </button>

                </p>

            </div>



        </div>
    );
}

