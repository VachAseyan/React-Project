import styles from "./Products.module.css";
import icon1 from "../../../assets/logo/icon1.png";
import icon2 from "../../../assets/logo/icon2.png";
import icon3 from "../../../assets/logo/icon3.png";
import icon4 from "../../../assets/logo/icon4.png";
import icon5 from "../../../assets/logo/icon5.png";
import { Link } from "react-router-dom";

const Products = () => {
    const products = [
        { icon: icon1, name: 'Cupcakes', link: '/cookies' },
        { icon: icon2, name: 'Desserts', link: '/desserts' },
        { icon: icon3, name: 'Cupcake Boxes', link: '/cupcakeboxes' },
        { icon: icon4, name: 'Wedding Cupcakes', link: '/cookies' },
        { icon: icon5, name: 'Cakes', link: '/desserts' },
    ];
    return (
        <div className={styles.products}>
            {products.map((product, index) => (
                <div key={index}>

                    <Link to={product.link}>
                        <div className={styles.iconBox}>
                            <div className={styles.smallIcon}>
                                <img src={product.icon} alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link to={product.link}>{product.name}</Link>
                </div>
            ))}
        </div >
    );
}

export default Products;