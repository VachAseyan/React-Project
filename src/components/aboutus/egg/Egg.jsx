import style from "./Egg.module.css";
import egg from "../../../assets/logo/egg.png";
import { Link } from "react-router-dom";

const Egg=()=>{
    return(
        <div className={style.order}>
            <Link to="">About Order & Delivery</Link>
             <img src={egg} alt="" />
        </div>
    )
}

export default Egg;