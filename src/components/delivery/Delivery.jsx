import style from "./Delivery.module.css";
import Cupcakedelivery from "./cupcakedelivery/Cupcakedelivery";
import DeilveryProcess from "./deliveryprocess/DeilveryProcess";

const Delivery = () => {
    return (
        <div className={style.delivery}>
            <Cupcakedelivery />
            <DeilveryProcess />
        </div>
    )
}

export default Delivery;