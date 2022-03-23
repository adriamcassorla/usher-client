// Both of the following will take an event ID as param and return a list of objects with event_ids inside them
import { addFav, deleteFav } from "../../services/api/user";

const toggleFav = async (eventId: number, favIds: number[] | undefined): Promise<User> => {
  console.log(favIds);
  console.log(eventId)
  if (favIds?.includes(eventId)) {
    console.log('deleting')
    return await deleteFav(eventId);
  }
  return await addFav(eventId);
}

export default toggleFav