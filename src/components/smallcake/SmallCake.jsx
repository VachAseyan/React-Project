import style from "./SmallCake.module.css";
import shop from "../../assets/logo/shop.png";
import like from "../../assets/logo/like.png";
import stars from "../../assets/logo/stars.png";
import { Link } from "react-router-dom";
import { addToBasket } from "../../store/features/basketActions";
import { useDispatch } from "react-redux";

const SmallCake = ({ item, count, minusCount, plyusCount }) => {

    const dispatch=useDispatch()

    const handleAddToBasket = () => {
        dispatch(addToBasket({ ...item, quantity: count }));
      };

    return (
        <div className={style.cakeList}>
            <div className={style.iconBoxes}>
                <img src={shop} alt="" />
                <img src={like} alt="" />
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
                <button
                    className={style.buttonplyus}
                    onClick={minusCount}
                    disabled={count <= 1}>
                    <p>-</p>
                </button>
                <p>{count}</p>
                <button className={style.buttonplyus} onClick={plyusCount}>
                    <p>+</p>
                </button>
            </div>
            <button className={style.button1} onClick={handleAddToBasket}>ADD TO CARD</button>
        </div>
    );
};

export default SmallCake;

