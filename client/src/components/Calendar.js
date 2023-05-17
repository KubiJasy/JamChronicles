import NavigationCard from "./NavigationCard";
import { myCalendar, calendarPlaceholder } from "../assets";
import classes from "./Calendar.module.css";

const Calendar = () => {
  return (
    <div className={classes["calendar"]}>
      <NavigationCard
        bImage={myCalendar}
        width="30%"
        bImageBlur
        overlayText="Look At Your Events For Today"
        overlayTextMont
      />
      <img width="70%%" src={calendarPlaceholder} alt="calendar placeholder" />
    </div>
  );
};

export default Calendar;
