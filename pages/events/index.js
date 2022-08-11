import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import SearchForm from "../../components/events/events-search";

const EventPage = () => {
  const allEvents = getAllEvents();
  console.log(allEvents);

  return (
    <>
      <SearchForm />
      <EventList items={allEvents} />
    </>
  );
};

export default EventPage;
