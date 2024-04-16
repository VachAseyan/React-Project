import { useState } from "react";
import style from "./CakeList.module.css";
import CakeItem from "../../cakeItem/CakeItem";
import { cakesData } from "../../../data";

const CakeList = () => {
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
                {cakesData.map((cake, index) => (
                    <CakeItem
                        key={cake.id}
                        item={cake}
                        count={counts[index]}
                        minusCount={() => minusCount(index)}
                        plyusCount={() => plyusCount(index)}
                        type={cake.type}
                    />
                ))}
            </div>
        </div>
    );
};

export default CakeList;



