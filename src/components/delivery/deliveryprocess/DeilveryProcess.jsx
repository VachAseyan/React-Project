import style from "./DeilveryProcess.module.css";

import delivery2 from "../../../assets/logo/delivery2.png";
import { Link } from "react-router-dom";



const DeilveryProcess = () => {
    return (
        <div className={style.deliveryBox}>
            <div className={style.deliveryText}>

                <p>We deliver to: Oakville; Auroa; Markham; Scarborough; Vaughn,; Ajax;<br></br>
                    and Pickering to name a few.Delivery fee is based on the delivery<br></br>
                    location postal code and in special cases, time of day.
                </p>
                <Link to="/delivery">Click here to start ordering for delivery.</Link>
                <p>To contact us by phone please call:</p>
                <p>North America:   +1-877-334-9468</p>
                <p>Outside of North Am:   +001-647-478-9464</p>
                <p> Email us at:   inquiry@torontocupcake.com</p>
                <p> with any type of question regarding delivery</p>
            </div>
            <img src={delivery2} alt="" />


        </div>
    )
}

export default DeilveryProcess;