import { useState } from "react";
import style from "./Dessertlist.module.css";
import CakeItem from "../../cakeItem/CakeItem";
import { dessertsData } from "../../../data";


const DessertList = () => {
    
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
                {dessertsData.map((dessert, index) => (
                    <CakeItem
                        image={dessert.image}
                        key={dessert.id}
                        item={dessert}
                        count={counts[index]}
                        minusCount={() => minusCount(index)}
                        plyusCount={() => plyusCount(index)}
                        type={dessert.type}
                    />
                ))}
            </div>
        </div>
    );
};

export default DessertList;


