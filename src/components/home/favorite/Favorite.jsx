import style from "./Favorite.module.css";
import SmallCake from '../../smallcake/SmallCake';
import cake1 from '../../../assets/logo/cake1.png';
import cake2 from "../../../assets/logo/cake2.png";
import cake3 from "../../../assets/logo/cake3.png";
import cake4 from "../../../assets/logo/cake4.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Favorite = () => {
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

    const cakesData = [
        { type: "cookies", id: 1, image: cake1, name: "A TASTE OF HEAVEN", price: "29.00" },
        { type: "cookies", id: 2, image: cake2, name: "CRAVE CLEAN", price: "29.00" },
        { type: "cookies", id: 3, image: cake3, name: "BIG SUGAR", price: "29.00" },
        { type: "cookies", id: 4, image: cake4, name: "MILK JAR", price: "29.00" },
    ];

    return (
        <div className={style.favorite}>
            <Link to="">FAVORITE ASSORTMENT</Link>
            <div className={style.cakes}>
                {cakesData.map((cake,index) => (
                    <SmallCake
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

export default Favorite;
