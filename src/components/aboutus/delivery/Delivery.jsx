import style from "./Delivery.module.css";
import delivery from "../../../assets/logo/delivery.png";
import { Link } from "react-router-dom";

const Delivery = () => {
    return (
        <div className={style.delivery}>
            <div className={style.text}>
                <Link href="">About Toronto</Link>
                <p>We are driven by loving what we do and what we make everyday.<br></br>
                    We get to use the finest ingredients to make what we believe are<br></br>
                    the tastiest treats,around. And.. we love the idea that our treats<br></br>
                    are making people happy every time they bite into one. How<br></br>
                    much fun is that!<br></br><br></br>
                    We are driven by loving what we do and what we make everyday.<br></br>
                    Get to use the finest ingredients to make what we believe are the<br></br>
                    tastiest treats around. And.. we love the idea that our treats
                </p>
            </div>
            <img src={delivery} alt="" />


        </div>
    )
}

export default Delivery;