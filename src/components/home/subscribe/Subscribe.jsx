import styles from "./Subscribe.module.css";
import background from "../../../assets/logo/background.png";
import { Link } from "react-router-dom";

const Subscribe = () => {
    return (
        <div className={styles.subscribe}>
            <Link to="">HOW TO SUBSCRIBE?</Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor<br></br>
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis<br></br>
                nostrud exercitation
            </p>
            <form className={styles.form} action="">
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Enter your email"
                />
                <button className={styles.buttonSubs}>SUBSCRIBE NOW</button>
            </form>
        </div>
    )
}

export default Subscribe;