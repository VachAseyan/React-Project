import style from "./Boximg.module.css";
import boximg1 from "../../../assets/logo/boximg1.png";
import boximg2 from "../../../assets/logo/boximg2.png";

const Boximg = () => {
    return (
        <div className={style.add}>
            <div className={style.photos}>
                <img src={boximg1} alt="" />
                <img src={boximg2} alt="" />
            </div>
        </div>
    )
}

export default Boximg;