import { useState, useRef } from "react";
import './ReadMore.scss';

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
                    Read More
                    <svg className={isActive ? "not-active" : "active"} xmlns="http://www.w3.org/2000/svg" width="20.201" height="20.201" viewBox="0 0 20.201 20.201">
                        <path id="circle_arrow_right2" data-name="circle arrow right2" d="M10.1,0A9.9,9.9,0,0,0,6.165.789,10.054,10.054,0,0,0,.789,6.165,9.9,9.9,0,0,0,0,10.1a9.9,9.9,0,0,0,.789,3.936,10.054,10.054,0,0,0,5.376,5.376A9.9,9.9,0,0,0,10.1,20.2a9.9,9.9,0,0,0,3.936-.789,10.054,10.054,0,0,0,5.376-5.376A9.9,9.9,0,0,0,20.2,10.1a9.9,9.9,0,0,0-.789-3.936A10.054,10.054,0,0,0,14.036.789,9.9,9.9,0,0,0,10.1,0Zm4.123,10.653-3.571,3.571a.628.628,0,1,1-.888-.888l2.6-2.6H5.681a.631.631,0,0,1,0-1.263h6.688l-2.6-2.6a.6.6,0,0,1,0-.888.6.6,0,0,1,.888,0l3.571,3.571a.588.588,0,0,1,.158.266.528.528,0,0,1,0,.286.528.528,0,0,1,0,.286A.588.588,0,0,1,14.223,10.653ZM20.2,18.938" fill="#0c1014" />
                    </svg>
                </button>

                <p ref={ReadMorePRef} className={isActive ? "not-active" : "active"}>
                    {props.readMore}
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

