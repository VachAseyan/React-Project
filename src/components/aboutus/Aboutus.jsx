import style from "./Aboutus.module.css";
import Info from "../../components/aboutus/info/Info";
import AboutCake from "./aboutCake/AboutCake";
import AboutToronto from "./aboutToronto/AboutToronto";
import Egg from "./egg/Egg";
import Order from "./order/Order";
import Delivery from "./delivery/Delivery";


const Aboutus = () => {
    return (
        <div className={style.Aboutus}>
            <Info />
            <AboutCake />
            <AboutToronto />
            <Egg />
            <Order />
            <Delivery />

        </div>
    )
}

export default Aboutus;