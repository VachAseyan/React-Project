import style from "./AboutCake.module.css";
import michele from "../../../assets/logo/michele.png";
import { Link } from "react-router-dom";

const AboutCake = () => {
    return (
        <div className={style.aboutMichele}>
            <Link to="/about">ABOUT TORONTO CUPCAKE</Link>
            <div className={style.michele}>
                <img src={michele} alt="" />
                <div className={style.text}>
                    <Link to="">About Michele</Link>
                    <p>Toronto Cupcake was created by Michelle Harrison so she could<br>
                    </br> pursue her love of baking. A lifelong baker, inspired by her mother,<br>
                        </br> Michelle opened Toronto Cupcake in August 2010 as one of<br>
                        </br> Canada's first gourmet cupcakeries.
                        <br></br><br></br><br></br><br></br>
                        Our cupcakes are baked daily using the finest ingredients.Canada's and<br>
                        </br> the GTA's favourite stop for that special treat. Order cupcakes online<br>
                        </br> 24/7 for your special event. Delivery avaialable most days between 8<br>
                        </br> and 6pm TO tim<br></br><br></br><br></br>
                        Our cupcakes are baked daily using the finest ingredients.Canada's and<br>
                        </br> the GTA's favourite stop for that special treat. Order cupcakes online<br></br>
                        24/7 for your special event.</p>
                </div>

            </div>
        </div>
    )
}












export default AboutCake;