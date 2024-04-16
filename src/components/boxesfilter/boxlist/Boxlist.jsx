import style from "./Boxlist.module.css";
import { useState } from "react";
import CakeItem from "../../cakeItem/CakeItem";
import { boxesData } from "../../../data";

const Boxlist = () => {
    const [counts, setCounts] = useState(Array(12).fill(1));

    const plyusCount = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    }

    const minusCount = (index) => {
        const newCounts = [...counts];
        if (newCounts[index] > 1) {
            newCounts[index] -= 1;
            setCounts(newCounts);
        }
    }
    

    return (
        <div className={style.cakelist}>
            <div className={style.cakes}>
                {boxesData.map((box, index) => (
                    <CakeItem
                        key={box.id}
                        item={box}
                        count={counts[index]}
                        minusCount={() => minusCount(index)}
                        plyusCount={() => plyusCount(index)}
                        type={box.type}
                    />
                ))}
            </div>
        </div>
    );
}

export default Boxlist;