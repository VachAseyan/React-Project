import styles from "./About.module.css";
import about from "../../../assets/logo/about.png";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className={styles.aboutUs}>
            <Link to="/about">
                <img src={about} alt="" />
            </Link>


            <div className={styles.aboutText}>
            <Link to="/about">
                ABOUT US
            </Link>
                <p>
                    Our cupcakes are baked daily using the finest ingredients.Canada's
                    and
                    <br></br>
                    the GTA's favourite stop for that special treat. Order cupcakes
                    online
                    <br></br>
                    24/7 for your special event. Delivery avaialable most days between 8
                    <br></br>
                    and 6pm TO time.<br></br>
                    <br></br>
                    Celebrating our 13th year of providing Canada's most delicious
                    <br></br>
                    cupcakes for business meetings, birthdays, weddings, or for no other
                    <br></br> reason than because.
                </p>
                <button className={styles.button}>SEE MORE</button>
            </div>
        </div >
    )
}

export default About;