import React, { useState } from 'react';
import style from "./Todesserts.module.css";
import aj from "../../../assets/logo/aj.png";
import slak2 from "../../../assets/logo/slak2.png";
import { Link } from 'react-router-dom';

const Todesserts = () => {
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
                <Link to="/desserts">DESSERTS</Link>
            </div>
            <div className={style.line} onClick={toggleWatchTextVisibility}>
                <a href="">Always available</a>
                <img src={slak2} alt="" style={{ transform: `rotate(${rotation}deg)` }}  />
            </div>
            {isWatchTextVisible && (
                <div className={style.watchText}>
                    <p>No added Tran's fats or margarine is used in any of our desserts, and all materials are non-GMO.<br></br>
                        Locally picked fruits and hand-selected chocolates are among the finest ingredients we have<br></br>
                        gathered from around the world.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Todesserts;