import React from 'react';
import styles from "./Header.module.css";
import logo from "../../assets/logo/logo.png";
import search from "../../assets/logo/search.png";
import user from "../../assets/logo/user.png";
import bask from "../../assets/logo/bask.png";
import menubar from "../../assets/logo/menubar.png";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
    const basketItems = useSelector(state => state.basket.items);
    const basketQuantity = basketItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className={styles.headerBox}>
            <Link className={styles.menubar}><img src={menubar} alt="" /></Link>
            <Link className={styles.HeaderLink} to="/">Home</Link>
            <Link className={styles.HeaderLink}  to="/cookies">Cookies</Link>
            <Link className={styles.HeaderLink}  to="/desserts">Desserts</Link>
            <Link className={styles.HeaderLink}  to="">Community</Link>
            <Link className={styles.biglogo} to=""><img src={logo} alt="" /></Link>
            <Link className={styles.HeaderLink}  to="">Resources</Link>
            <Link className={styles.HeaderLink}  to="/about">About</Link>
            <Link className={styles.HeaderLink}  to="/contact">Contact</Link>
            <div className={styles.logoBox}>
                <Link to=""><img src={search} alt="" /></Link>
                <Link to=""><img src={user} alt="" /></Link>
                <Link to="/basket">
                    <img src={bask} alt="" />
                    <p className={styles.quantity}>{basketQuantity > 0 && <span className={styles.quantity}>{basketQuantity}</span>}</p>
                 
                </Link>
            </div>
        </div>
    )
}

export default Header;
