import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
    return (
        <div className={styles.footerBig}>
            <div className={styles.bigDiv}>
                <Link to="/"><img src={logo} alt="" /></Link>
                <div className={styles.footerBox}>
                    <Link to="/" className={styles.footerText}>WEDDING CUPCAKES</Link>
                    <Link to="/cupcakeboxes" className={styles.footerText}>CupCake BOXES</Link>
                    <Link to="/desserts" className={styles.footerText}>DESSERTS</Link>
                    <Link to="corporate/" className={styles.footerText}>CORPORATE EVENTS</Link>
                </div>
                <div className={styles.footerBox}>
                    <Link to="/about" className={styles.footerText}>ABOUT</Link>
                    <Link to="/contact" className={styles.footerText}>CONNACT</Link>
                    <Link to="/" className={styles.footerText}>OCASSIONS</Link>
                    <Link to="/" className={styles.footerText}>COMMUNITY</Link>
                </div>
                <div className={styles.footerBox}>
                    <Link to="/" className={styles.footerText}>RESOURCES</Link>
                    <Link to="/delivery" className={styles.footerText}>CUPCAKE DELIVERY</Link>
                    <Link to="/" className={styles.footerText}>VIEW CART</Link>
                    <Link to="/" className={styles.footerText}>HOME</Link>
                </div>
                <div className={styles.footerBox}>
                    <Link to="/" className={styles.footerText}>ALWAYS AVAILABLE</Link>
                    <Link to="/" className={styles.footerText}>HOLIDAYS</Link>
                    <Link to="/" className={styles.footerText}>SPECIAL EVENTS</Link>
                    <Link to="/" className={styles.footerText}>CUSTOM</Link>
                </div>
            </div>
            <p className={styles.Design}>Design 2023</p>
        </div>
    );
}

export default Footer;
