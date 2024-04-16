import style from "./Info.module.css";
import arrow from "../../../assets/logo/arrow.png";
import { Link } from "react-router-dom";

const Info = () => {
      return(
        <div className={style.tox}>
            <div className={style.toxInfo}>
                <Link to="/about">ABOUT</Link>
    

            </div>
        </div>
      )
}

export default Info;