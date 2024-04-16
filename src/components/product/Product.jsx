import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './Product.module.css';
import aj from '../../assets/logo/aj.png';
import stars from '../../assets/logo/stars.png';
import slak2 from '../../assets/logo/slak2.png';
import buy from '../../assets/logo/buy.png';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/features/basketActions';

const Product = ({ data }) => {
    const { id } = useParams();
    const product = data.find(item => item.id === parseInt(id));
    const [isWatchTextVisible, setIsWatchTextVisible] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    

    if (!product) {
        return <div>Product not found!</div>;
    }

    const toggleWatchTextVisibility = () => {
        setIsWatchTextVisible(!isWatchTextVisible);
        setRotation(rotation + 180);
    };

    const handleAddToBasket = () => {
        dispatch(addToBasket({ ...product, quantity: count }));
    };

    const plyusCount = () => {
        setCount(count + 1);
    };

    const minusCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className={style.product}>
            <div className={style.toProduct}>
                <Link to="/">HOME</Link>
                <img src={aj} alt="" />
                <Link to="/cookies">CUPCAKES</Link>
                <img src={aj} alt="" />
                <Link to="/basket">BUY NOW</Link>
            </div>
            <div className={style.cakeBox}>
                <img src={product.image} alt="Product" />
                <div className={style.orderList}>
                    <h2>{product.name}</h2>
                    <Link to="/cookies">CHOOSE A CUPCAKE</Link>
                    <p>The same beautiful designs and delicious tasting cupcakes, suitable for dietary requirements</p>
                    <div className={style.priceList}>
                        <p>Price: ${product.price}</p>
                        <img src={stars} alt="Stars" />
                    </div>
                    <div className={style.line} onClick={toggleWatchTextVisibility}>
                        <p>Select a size</p>
                        <img src={slak2} alt="Slak2" style={{ transform: `rotate(${rotation}deg)` }} />
                    </div>
                    {isWatchTextVisible && (
                        <div className={style.watchSize}>
                            <div className={style.size}>Small</div>
                            <div className={style.size}>Middle</div>
                            <div className={style.size}>Large</div>
                        </div>
                    )}
                    <p>Please note: All of our products may contain traces of cereals containing<br></br>
                        gluten, milk, eggs, nuts, soya, sesame, peanuts and sulphites</p>
                    <div className={style.selectCount}>
                        <img src={buy} alt="Buy" />
                        <div className={style.minusplyusDiv}>
                            <button
                                className={style.buttonplyus}
                                onClick={minusCount}
                                disabled={count <= 1}>
                                <p>-</p>
                            </button>
                            <p>{count}</p>
                            <button className={style.buttonminus} onClick={plyusCount}>
                                <p>+</p>
                            </button>
                        </div>
                    </div>
                    <Link to="">
                        <button className={style.buttonBuy} onClick={handleAddToBasket}>
                            BUY NOW
                        </button>
                    </Link>
                </div>
            </div>
            <div className={style.productFooter}>
                <p><strong>Need a hand?</strong> Customer support telephone: 0330 058 9525</p>
                <Link to="/">Back to home</Link>
            </div>
        </div>
    );
}

export default Product;




