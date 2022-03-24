// Both of the following will take an event ID as param and return a list of objects with event_ids inside them
import { addFav, deleteFav } from "../../services/api/user";

const toggleFav = async (eventId: number, isFav: boolean): Promise<number[]> => {
  console.log(eventId);
  if (isFav) {
    console.log('deleting');
    return await deleteFav(eventId);
  }
  console.log('adding');
  return await addFav(eventId);
}

export default toggleFav