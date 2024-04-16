import styles from "./Toronto.module.css";
import image1 from "../../../assets/logo/image1.png";
import image2 from "../../../assets/logo/image2.png";
import image3 from "../../../assets/logo/image3.png";
import { Link } from "react-router-dom";


const Toronto = () => {
    const buttonText = "JOIN US";
    return (
        <div className={styles.cakeBox}>
            <div className={styles.name}>
                <Link className={styles.headerName} to="">TORONTO CUPCAKE</Link>
            </div>
            <div className={styles.nextBox}>
                <div className={styles.image1Box}>
                
                        <img className={styles.image1} src={image1} alt="" />
                    
                    <Link classname={styles.next1}  to="">
                        NEXT
                    </Link>
                </div>
                <div className={styles.image2Box}>
                    
                        <img className={styles.image2} src={image2} alt="" />
                    
                </div>
                <div className={styles.image3Box}>
                    <Link to="">
                        NEXT
                    </Link>
                    <a href="" className={styles.image3}>
                        <img className={styles.image3} src={image3} alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.text}>
                <Link to="">"Welcome! Thank you for stopping by Toronto Cupcake."</Link>
            </div>
            <button className={styles.button}>{buttonText}</button>
        </div>
    )
}

export default Toronto;