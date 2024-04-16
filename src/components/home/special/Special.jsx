import styles from "./Special.module.css";
import GroupImage from "../../../assets/logo/Group Image.png";
import { Link } from "react-router-dom";

const Special = () => {
  return (
    <div className={styles.special}>
      <div className={styles.specialText}>
        <Link to="" className={styles.vernagir}>
          SPECIAL OFFER
        </Link>
        <Link to="" className={styles.a1}>
          Special offer to our customer order 2 boxes get a<br></br>
          gift another box of cupcakes
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod<br></br>
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
          <br></br>
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea<br></br>
          commodo consequat.
        </p>
        <button className={styles.button}>ORDER NOW</button>
      </div>

      <img src={GroupImage} alt="" />

    </div>
  )
}

export default Special;