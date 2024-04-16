import React, { useState } from 'react';
import styles from './Faq.module.css';
import slak2 from '../../../assets/logo/slak2.png';
import { Link } from 'react-router-dom';

function FAQComponent() {
    const [isTextVisible1, setIsTextVisible1] = useState(false);
    const [isTextVisible2, setIsTextVisible2] = useState(false);
    const [isTextVisible3, setIsTextVisible3] = useState(false);
    const [isTextVisible4, setIsTextVisible4] = useState(false);
    const [rotation, setRotation] = useState(0);

    const toggleTextVisibility1 = () => {
        setIsTextVisible1(!isTextVisible1);
        setRotation(rotation + 180);
    };

    const toggleTextVisibility2 = () => {
        setIsTextVisible2(!isTextVisible2);
        setRotation(rotation + 180);
    };

    const toggleTextVisibility3 = () => {
        setIsTextVisible3(!isTextVisible3);
        setRotation(rotation + 180);
    };

    const toggleTextVisibility4 = () => {
        setIsTextVisible4(!isTextVisible4);
        setRotation(rotation + 180);
    };

    return (
        <div className={styles.FAQ}>
            <Link to="">FAQ</Link>
            <div className={styles.way} onClick={toggleTextVisibility1}>
                <Link to="">
                    What's the best way to store my cupcakes?
                </Link>
                <img src={slak2} alt="" style={{ transform: `rotate(${rotation}deg)` }} />
            </div>
            {isTextVisible1 && (
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore<br></br>
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation But
                    any other cupcakes can be kept moist and<br></br>
                    decadent, simply by packing them in a Ziploc-style plastic container
                    and storing them on your countertop at room<br></br>
                    temperature for up to 2 days
                </p>
            )}

            <div className={styles.way1} onClick={toggleTextVisibility2}>
                <Link to="">
                    What's a good way to get my cake/cupcakes out of the box?
                </Link>
                <img src={slak2} alt="" style={{ transform: `rotate(${rotation}deg)` }} />
            </div>
            {isTextVisible2 && (
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore<br></br>
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation But
                    any other cupcakes can be kept moist and<br></br>
                    decadent, simply by packing them in a Ziploc-style plastic container
                    and storing them on your countertop at room<br></br>
                    temperature for up to 2 days
                </p>
            )}

            <div className={styles.way1} onClick={toggleTextVisibility3} >
                <Link to="">
                    Do you guys have a walk-in store?
                </Link>
                <img src={slak2} alt="" style={{ transform: `rotate(${rotation}deg)` }} />
            </div>
            {isTextVisible3 && (
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore<br></br>
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation But
                    any other cupcakes can be kept moist and<br></br>
                    decadent, simply by packing them in a Ziploc-style plastic container
                    and storing them on your countertop at room<br></br>
                    temperature for up to 2 days
                </p>
            )}

            <div className={styles.way1} onClick={toggleTextVisibility4} >
                <Link to="">
                    Do you have to pre-order?
                </Link>
                <img src={slak2} alt="" style={{ transform: `rotate(${rotation}deg)` }} />
            </div>
            {isTextVisible4 && (
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore<br></br>
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation But
                    any other cupcakes can be kept moist and<br></br>
                    decadent, simply by packing them in a Ziploc-style plastic container
                    and storing them on your countertop at room<br></br>
                    temperature for up to 2 days
                </p>
            )}
        </div>
    );
}

export default FAQComponent;


