// Both of the following will take an event ID as param and return a list of objects with event_ids inside them
import { addFav, deleteFav } from "../../services/api/user";

export const toggleFav = async (eventId: string, favorite_events: EventType[]) => {
  // If eventId in favorite_events
    // await deleteFav(eventId)
      // Update user context with new favlist
  // Else
    // await addFav(eventId)
      // Update user context with new favlist 
}