import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

const HomePage = () => {
  const featured = getFeaturedEvents();

  return (
    <div>
      <EventList items={featured} />
    </div>
  );
};

export default HomePage;
