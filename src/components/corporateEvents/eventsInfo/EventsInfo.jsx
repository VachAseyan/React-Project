import { Link } from "react-router-dom";
import style from "./EventsInfo.module.css";
import corp1 from "../../../assets/logo/corp1.png";
import corp2 from "../../../assets/logo/corp2.png";

const EventsInfo = () => {
    return (
        <div className={style.bigDiv}>
            <div className={style.info}>
                <Link to="/corporate">Corporates & events</Link>
            </div>
            <div className={style.deliveryBox}>
                <div className={style.deliveryText}>
                    <Link className={style.a1} to="/corporate">Corporate  events</Link>
                    <p>From Product/Brand Launch to Customer Appreciation, Toronto Cupcake is<br></br>
                        able to provide you custom decorating to match that winning campaign.</p>
                    <p>Our Graphics Department will work with you to reproduce Logos, Icons,<br></br>
                        Slogans , etc on an edible fondant disc or hand pressed lettering on a fondant<br></br>
                        disc. Our frostings can be made to mimic your theme colours or to use as a<br></br>
                        neutral backdrop.</p>
                    <p>Our graphics are crystal clear and because we mount them on fondant they<br></br>
                        look great and are edible!You can send us your graphics in almost any format<br></br>
                        (jpg, png, gif, bmp, svg, etc) and we will take it from there.We will work with<br></br>
                        you on special delivery requests and packaging if needed.</p>
                    <p>We will deliver your marketing materials along with our cupcakes.</p>
                </div>
                <img src={corp1} alt="" />
            </div>
            <div className={style.deliveryBox}>
                <img src={corp2} alt="" />
                <div className={style.deliveryText}>
                    <Link className={style.a1} to="/corporate">Corporate Cupcakes & Cakes</Link>
                    <p>A fantastic way to impress clients, thank colleagues or celebrate product<br></br>
                        launches, our cupcakes & cakes will give your event something delicious</p>
                    <p>We have experience working with some of the world’s leading brands and<br></br>
                        are able to offer multiple deliveries across the UK.to remember.</p>
                    <p>Our graphics are crystal clear and because we mount them on fondant they<br></br>
                        look great and are edible!You can send us your graphics in almost any format<br></br>
                        (jpg, png, gif, bmp, svg, etc) and we will take it from there.We will work with<br></br>
                        you on special delivery requests and packaging if needed.</p>

                </div>

            </div>
        </div>
    )
}

export default EventsInfo;