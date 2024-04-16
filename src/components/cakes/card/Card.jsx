import style from "./Card.module.css";
import first from "../../../assets/logo/first.png";
import second from "../../../assets/logo/second.png";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className={style.add}>
            <div className={style.photos}><img src={first} alt=""/>
                <img src={second} alt="" />
            </div>
            <button>ADD TO CART</button>
            <Link to="">Or have fun and select from the individual flavours below:</Link>
        </div>
    )
}

export default Card;