import style from "./BoxesFilter.module.css";
import Boximg from "./boximg/Boximg";
import BoxInfo from "./boxinfo/Boxinfo";
import Boxlist from "./boxlist/Boxlist";

const BoxesFilter = () => {
    return (
        <div className={style.boxesfilter}>
            <BoxInfo />
            <Boximg />
            <Boxlist />
        </div>
    )
}

export default BoxesFilter;