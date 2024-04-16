import React, { useState } from 'react';
import style from './CakeItem.module.css';
import shop from '../../assets/logo/shop.png';
import like from '../../assets/logo/like.png';
import stars from '../../assets/logo/stars.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/features/basketActions';

const CakeItem = ({ item }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleAddToBasket = () => {
    dispatch(addToBasket({ ...item, quantity: count }));
  };

  return (
    <div className={style.cakeList}>
      <div className={style.iconBoxes}>
        <img className={style.shop} src={shop} alt="" />
        <img className={style.like}  src={like} alt="" />
      </div>
      <Link to={`/${item.type}/${item.id}`}>
        <img src={item.image} alt="" />
      </Link>
      <Link to={`/${item.type}/${item.id}`}>{item.name}</Link>
      <img className={style.stars} src={stars} alt="" />
      <p>
        The same beautiful designs and delicious<br></br>
        tasting cupcakes, suitable for dietary<br></br>
        requirements
      </p>
      <Link to={`/${item.type}/${item.id}`}>From ${item.price}</Link>
      <div className={style.minusplyusDiv}>
        <button className={style.buttonplyus} onClick={decrementCount} disabled={count <= 1}>
          <p>-</p>
        </button>
        <p>{count}</p>
        <button className={style.buttonplyus} onClick={incrementCount}>
          <p>+</p>
        </button>
      </div>
      <button className={style.button1} onClick={handleAddToBasket}>
        ADD TO CARD
      </button>
    </div>
  );
};

export default CakeItem;


