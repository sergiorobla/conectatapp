import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Event } from "./types";
import { events as initialEvents } from "../data";

interface EventContextType {
    events: Event[];
    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
    addEvent: (newEvent: Event) => void;
    deleteEvent: (name: string) => void; // Función para eliminar
    editEvent: (name: string, updatedEvent: Partial<Event>) => void; // Función para editar
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
    children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        setEvents(initialEvents); // Cargar eventos iniciales
    }, []);

    const addEvent = (newEvent: Event) => {
        setEvents((prevEvents) => [...prevEvents, newEvent]);
    };

    const deleteEvent = (name: string) => {
        setEvents((prevEvents) => prevEvents.filter((event) => event.name !== name));
    };

    const editEvent = (name: string, updatedEvent: Partial<Event>) => {
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.name === name ? { ...event, ...updatedEvent } : event
            )
        );
    };

    return (
        <EventContext.Provider
            value={{ events, setEvents, addEvent, deleteEvent, editEvent }}
        >
            {children}
        </EventContext.Provider>
    );
};

// Custom hook para usar el contexto
export const useEvents = () => {
    const context = React.useContext(EventContext);
    if (!context) {
        throw new Error("useEvents must be used within an EventProvider");
    }
    return context;
};
