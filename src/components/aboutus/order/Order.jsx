import style from "./Order.module.css";
import order from "../../../assets/logo/order.png";
import { Link } from "react-router-dom";

const Order = () => {
    return (
        <div className={style.orderDiv}>
            <img src={order} alt="" />
            <div className={style.text}>
                <Link to="">Order</Link>
                <p>Our cupcakes are baked daily using the finest ingredients.Canada's and<br></br>
                    the GTA's favourite stop for that special treat. Order cupcakes online<br></br>
                    24/7 for your special event. Delivery avaialable most days between 8<br></br>
                    and 6pm TO time<br></br><br></br>
                    Our cupcakes are baked daily using the finest ingredients.Canada's and<br></br>
                    the GTA's favourite stop for that special treat. Order cupcakes online<br></br>
                    24/7 for your special event.
                </p>
            </div>

        </div>
    )
}

export default Order;