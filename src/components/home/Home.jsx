import styles from "./Home.module.css";
import Toronto from "../home/toronto/Toronto";
import Products from "../home/products/Products";
import About from "./about/About";
import Favorite from "./favorite/Favorite";
import stars from "../../assets/logo/stars.png";
import Special from "./special/Special";
import Rev from "./rev/Rev";
import Faq from "./faq/Faq";
import Subscribe from "./subscribe/Subscribe";

const Cupcake = () => {
  return (
    <div className={styles.cupcake}>
      <Toronto />
      <Products />
      <About />
      <Favorite />
      <Special />
      <Rev />
      <Faq />
      <Subscribe />
    </div>
  );
};

export default Cupcake;
