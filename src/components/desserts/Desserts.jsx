import style from "./Desserts.module.css";
import Todesserts from "../desserts/todesserts/Todesserts";
import Dessertimg from "../desserts/dessertimg/Dessertimg";
import Dessertlist from "./dessertlist/Dessertlist";


const Desserts = () => {
    return (
        <div className={style.desserts}>
            <Todesserts />
            <Dessertimg />
            <Dessertlist />
        </div>
    )
}

export default Desserts;