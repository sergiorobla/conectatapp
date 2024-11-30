import React from "react";
import EventCard from "../../logic/EventCard";

interface EventsPageProps {
  events: Array<{
    imageUrl: string;
    name: string;
    date: string;
    description: string;
    coordinates: [number, number];
    isFavourite: boolean;
  }>;
}

const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {events.map((event) => (
        <EventCard
          key={event.name}
          imageUrl={event.imageUrl}
          name={event.name}
          date={event.date}
          description={event.description}
          coordinates={event.coordinates}
          isFavourite={event.isFavourite}
          onFavouriteToggle={() => {}}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      ))}
      {events.length === 0 && (
        <p className="text-center text-gray-500 col-span-full">
          No se encontraron eventos.
        </p>
      )}
    </div>
  );
};

export default EventsPage;
