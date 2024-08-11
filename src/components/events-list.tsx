import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";

export default async function EventList({ city }: { city: string }) {
  const events = await getEvents(city);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
