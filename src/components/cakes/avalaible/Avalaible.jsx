import React, { useState } from 'react';
import style from "./Avalaible.module.css";
import aj from "../../../assets/logo/aj.png";
import slak2 from "../../../assets/logo/slak2.png";
import { Link } from 'react-router-dom';

const Avalaible = () => {
    const [isWatchTextVisible, setIsWatchTextVisible] = useState(false);
    const [rotation, setRotation] = useState(0);

    const toggleWatchTextVisibility = () => {
        setIsWatchTextVisible(!isWatchTextVisible);
        setRotation(rotation + 180);
    };

    return (
        <div className={style.always}>
            <div className={style.text}>
                <Link to="/">HOME</Link>
                <img src={aj} alt="" />
                <Link to="/cookies">CUPCAKES</Link>
            </div>
            <div className={style.line} onClick={toggleWatchTextVisibility}>
                <Link to="">Always available</Link>
                <img src={slak2} alt="" style={{ transform: `rotate(${rotation}deg)` }}  />
            </div>
            {isWatchTextVisible && (
                <div className={style.watchText}>
                    <p>In a panic or can't decide? Need a dozen awesome cupcakes but don't want to pick them out individually?<br />
                        Read no more just hit the add to cart button and we will pick out 12 delicious treats from our "always<br />
                        available" cupcakes.<br/><br />
                    </p>
                </div>
            )}
            <p>One Dozen One Click</p>
        </div>
    );
}

export default Avalaible;
