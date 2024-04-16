import style from "./Cupcakedelivery.module.css";
import delivery1 from "../../../assets/logo/delivery1.png";
import { Link } from "react-router-dom";



const Cupcakedelivery = () => {
    return (
        <div className={style.deliveryBox}>
            <img src={delivery1} alt="" />
            <div className={style.deliveryText}>
                <Link to="/delivery">Cupcake Delivery</Link>
                <p>Cupcake delivery Toronto and GTA. Our cupcake delivery service<br></br>
                    is available 7 days a week and covers approximately 80km surrounding<br></br>
                    Toronto. Sending cupcakes has never been easier.</p>
                <p>Most deliveries can be made on the same day you order.If you need a<br></br>
                    delivery to a location that is outside of downtown Toronto we require<br></br>
                    notice at least the night before.Morning deliveries are typically for<br></br>
                    M** postal codes.</p>
                <p>Order three dozen or more and your delivery to downtown Toronto is<br></br>
                    free or greatly reduced to other locations.</p>
            </div>

        </div>
    )
}

export default Cupcakedelivery;