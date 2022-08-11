import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((event) => {
        return <EventItem key={event.id} item={event} />;
      })}
    </ul>
  );
};

export default EventList;
