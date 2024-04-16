import { Link } from "react-router-dom";
import style from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={style.contactDiv}>
                <form action="">
                    <Link to="/contact">Contact us</Link>
                    <p>Have a question, suggestion or comment? We have a dedicated<br></br>
                        team ready and waiting to talk cupcakes!</p>
                    <p>Monday - Saturday: 7am<br></br>
                        9.30pm Sunday: 8am - 9pm</p>
                    <input type="text" placeholder="Full name*" />
                    <input type="email" placeholder="Email*" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message*">

                    </textarea>
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;