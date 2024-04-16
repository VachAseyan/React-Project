import style from "./Dessertimg.module.css";
import dessert1 from "../../../assets/logo/dessert1.png";
import dessert2 from "../../../assets/logo/dessert2.png";

const Dessertimg = () => {
    return (
        <div className={style.add}>
            <div className={style.photos}>
                <img src={dessert1} alt="" />
                <img src={dessert2} alt="" />
            </div>
        </div>
    )
}

export default Dessertimg;