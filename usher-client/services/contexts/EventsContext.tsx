import * as React from "react";
import { createContext, useContext, useState } from "react";
import { getCityEvents } from "../api/events";

type EventsContextType = {
  events: EventType[] | null;
  populateEvents: (city: string) => void;
};

const defaultValue: EventsContextType = {
  events: null,
  populateEvents: () => {},
};

export const EventsContext = createContext<EventsContextType>(defaultValue);

export const EventsProvider = ({ children }: any) => {
  const [events, setEvents] = useState<EventType[] | null>(null);

  const populateEvents = async (city: string) => {
    const fetchedEvents = await getCityEvents(city);
    setEvents(fetchedEvents);
  };

  return (
    <EventsContext.Provider value={{ events, populateEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEventsContext = () => useContext(EventsContext);
