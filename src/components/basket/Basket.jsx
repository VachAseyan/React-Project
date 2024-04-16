import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Basket.module.css';
import aj from '../../assets/logo/aj.png';
import select from '../../assets/logo/select.png';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, updateQuantity } from '../../store/features/basketActions';

const Basket = () => {
  const basketItems = useSelector(state => state.basket.items);
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(prevState => !prevState);
  };

  const handleMinusQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity(itemId, currentQuantity - 1));
    }
  };

  const handlePlusQuantity = (itemId, currentQuantity) => {
    dispatch(updateQuantity(itemId, currentQuantity + 1));
  };

  const handleDeleteItem = itemId => {
    dispatch(removeFromBasket(itemId));
  };

  const totalPrice = basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className={style.basket}>
      <div className={style.toBasket}>
        <Link to="/">HOME</Link>
        <img src={aj} alt="" />
        <Link to="/basket">BASKET</Link>
      </div>
      <div className={style.basketItems}>
        <Link to="">YOUR ITEMS</Link>
        <div className={style.baskets}>
          <div className={style.select} onClick={toggleSelectAll}>
            <img src={select} alt="" />
            <span>Select all</span>
          </div>
          {basketItems.map((item) => (
            <div key={item.id} className={`${style.basketList} ${selectAll ? style.selected : ''}`}>
              {/* Add the 'selected' class if 'selectAll' is true */}
              <div className={style.basketInfo}>
                <img src={item.image} alt="" />
                <div className={style.text}>
                  <h2>{item.name}</h2>
                  <h4>{item.size}</h4>
                  <p>Please note: All of our products may contain traces of cereals containing<br></br>
                    gluten, milk, eggs, nuts, soya, sesame, peanuts and sulphites</p>
                  <h3>{item.price}</h3>
                </div>
              </div>
              <div className={style.buyList}>
                <div className={style.minusplyusDiv}>
                  <button
                    className={style.buttonminus}
                    onClick={() => handleMinusQuantity(item.id, item.quantity)}
                    disabled={item.quantity <= 1}>
                    <p>-</p>
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className={style.buttonplyus}
                    onClick={() => handlePlusQuantity(item.id, item.quantity)}>
                    <p>+</p>
                  </button>
                </div>
                <p className={style.p} onClick={() => handleDeleteItem(item.id)}>Delete</p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.total}>
          <div className={style.payBox}>
            <p>*You can change your data</p>
            <form className={style.form} action="">
              <input type="text" placeholder="Address*" />
              <input type="text" placeholder="+374 *** *** ***" />
              <input type="text" placeholder="Visa" />
              <div className={style.pay}>
                <img src={select} alt="" />
                <span>Pay Now</span>
              </div>
            </form>
          </div>
          <div className={style.buyBasket}>
            <p>IN TOTAL: ${totalPrice}</p>
            <button>
              BUY NOW
            </button>
            <p>*Delivery will be on December 29th</p>
          </div>
        </div>
      </div>
      <div className={style.productFooter}>
        <p><strong>Need a hand?</strong> Customer support telephone:0330 058 9525</p>
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
}

export default Basket;










