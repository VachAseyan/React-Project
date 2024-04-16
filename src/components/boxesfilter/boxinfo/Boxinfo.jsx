import { useState } from "react";
import style from "./BoxInfo.module.css";
import slak2 from "../../../assets/logo/slak2.png";
import { Link } from "react-router-dom";

const BoxInfo = () => {
    const [isWatchTextVisible, setIsWatchTextVisible] = useState(false);
    const [rotation, setRotation] = useState(0);

    const toggleWatchTextVisibility = () => {
        setIsWatchTextVisible(!isWatchTextVisible);
        setRotation(rotation + 180);
    };

    const firstLineBoxes = [
        "All available boxes",
        "Autumn cupcake box",
        "Chocolate lover box",
        "Assorted classics box",
        "Fruit cupcake box",
        "Animal cupcake box"
    ];

    const secondLineBoxes = [
        "Holidays cupcake box",
        "Dinosaur cupcake box",
        "Vegan cupcake box",
        "Kids cupcake box",
    ];

    return (
        <div className={style.always}>
            <div className={style.line} onClick={toggleWatchTextVisibility}>
                <Link to="">Always available</Link>
                <img src={slak2} alt="" style={{ transform: `rotate(${rotation}deg)` }}  />
            </div>
            {isWatchTextVisible && (
                <div className={style.watchText}>
                    <div className={style.boxshop}>
                        <div className={style.firstline}>
                            {firstLineBoxes.map((boxName, id) => (
                                <div key={id} className={style.smallbuttons}>
                                    <p>{boxName}</p>
                                </div>
                            ))}
                        </div>
                        <div className={style.secondline}>
                            {secondLineBoxes.map((boxName, id) => (
                                <div key={id} className={style.smallbuttons}>
                                    <p>{boxName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p>No added Tran's fats or margarine is used in any of our desserts, and all materials are non-GMO.<br></br>
                        Locally picked fruits and hand-selected chocolates are among the finest ingredients we have<br></br>
                        gathered from around the world.
                    </p>
                </div>
            )}
        </div>
    );
}

export default BoxInfo;
