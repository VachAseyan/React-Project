import style from "./CorporateEvents.module.css";
import CorporateOrder from "./corporateOrder/CorporateOrder";
import EventsInfo from "./eventsInfo/EventsInfo";

const CorporateEvents = () => {
    return (
        <div className={style.corporateEvent}>
            <EventsInfo />
            <CorporateOrder />
        </div>
    )
}

export default CorporateEvents;