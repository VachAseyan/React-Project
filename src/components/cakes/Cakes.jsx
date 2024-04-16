import style from "./Cakes.module.css";
import Avalaible from "./avalaible/Avalaible";
import CakeList from "./cakeList/CakeList";
import Card from "./card/Card";


const Cakes = () => {
    return (
        <div className={style.cakes}>
            <Avalaible />
            <Card />
            <CakeList />

        </div>
    )
}

export default Cakes;