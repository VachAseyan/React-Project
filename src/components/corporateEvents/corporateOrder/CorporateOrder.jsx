import style from "./CorporateOrder.module.css";
import corp3 from "../../../assets/logo/corp3.png";
import ket from "../../../assets/logo/ket.png";
import { Link } from "react-router-dom";

const CorporateOrder = () => {
    return (
        <div className={style.allDiv}>
            <div className={style.offer}>
                <Link className={style.vernagir} to="">What can we offer you?</Link>
                <p><img src={ket} alt="" />Delivery to multiple locations (We currently deliver to London, Birmingham, Slough, Reading, Hemel<br></br>
                    Hempstead, Luton, Oxford, Guildford, Chelmsford, Stevenage, Milton Keynes, Northampton, Cambridge,<br></br>
                    Brighton and Coventry).</p>
                <p><img src={ket} alt="" />UK wide delivery (excluding Cupcakes, Cakes and large Cheesecakes).</p>
                <Link className={style.vernagir} to="">Tailored to you!</Link>
                <p><img src={ket} alt="" />Bespoke icing colours available to match your theme or event.</p>
                <p><img src={ket} alt="" />Bespoke cupcake designs are available but require a three week lead, and a minimum run of 1000 boxes.<br></br>
                    Templating/setup charges are applicable.</p>
                <p><img src={ket} alt="" />Bespoke cupcake Toppers with Logo’s or Images on every cake.</p>
                <p><img src={ket} alt="" />Personalized gift cards with every order</p>
                <p><img src={ket} alt="" />Bespoke Cupcake/Cake Boxes (minimum orders and lead times apply).</p>
            </div>
            <div className={style.photoCakes}>
                <Link to="/cookies">Photo Cakes & Cupcakes</Link>
                <p>Our edible image cupcakes offer the perfect way to show off a new brand or product<br></br>
                    launch, or simply celebrate a special event.</p>
                <img src={corp3} alt="" />
                <button>TO ORDER</button>
                <p><strong>Need a hand?</strong> Customer support telephone:0330 058 9525</p>

            </div>
        </div>
    )
}

export default CorporateOrder;