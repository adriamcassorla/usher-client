import { DateTime } from 'luxon';

export const todayDates = (event: EventType) => {
  if (event.today_shows.length === 0) return null;
  return event.today_shows.map((show) =>
    DateTime.fromMillis(Number(show.date)).toLocaleString(DateTime.TIME_24_SIMPLE)
  );
};

export const capitalizeName = (event: EventType) => {
  return event.name
    .toLowerCase()
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
export const getRandomTopEvents = (events: EventType[]) => {
  const todayEvents = events.filter(
    (event) => event.today_shows.length > 0
  ); //Select only events that have a show today

  if (todayEvents.length) {
    const nEvents = todayEvents.length > 5 ? 5 : todayEvents.length;
    const selectedEvents = todayEvents
      .sort(() => Math.random() - Math.random()) // sorts the array randomly
      .slice(0, nEvents); // Takes the first 5 of them.
    return selectedEvents
  }
  return null;
}
