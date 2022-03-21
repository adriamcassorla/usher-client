import { coerceInputValue } from 'graphql';
import { DateTime } from 'luxon';

export const getMockCopy = () => {
  const copy = [
    "Come see this season's hit show 50% off!",
    "This critic's favorite will defy all youyr expectations",
    'Experience this mind-blowing prize-winning show',
    "Revisit this classic from the hand of the city's most renown company",
    'A legendary production returns to the city with its original cast',
    "Still haven't watched this masterpiece? What are you waiting for?",
    "Don't miss out on this promissing new show!",
  ];
  return copy[Math.floor(Math.random()*copy.length)];
};

export const getMockPromo = () => {
  const promos = [
    '25% off only today!',
    'Limitted tickets half off!',
    'Last shows in the city',
    'Winner of 5 national awards',
    'Get 10% off two or more tickets',
    "Critic's choice",
    'Top seats for less',
  ];
  return promos[Math.floor(Math.random()*promos.length)];
};

export const todayDates = (event: EventType) => {
  if (event.today_shows.length === 0) return null;
  return event.today_shows.map((show) =>
    DateTime.fromMillis(Number(show.date)).toLocaleString(DateTime.TIME_24_SIMPLE)
  ).join('  |  ');
};

export const capitalize = (str: String) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
export const getRandomTopEvents = (events: EventType[]) => {
  const todayEvents = events.filter((event) => event.today_shows.length > 0); //Select only events that have a show today

  if (todayEvents.length) {
    const nEvents = todayEvents.length > 5 ? 5 : todayEvents.length;
    const selectedEvents = todayEvents
      .sort(() => Math.random() - Math.random()) // sorts the array randomly
      .slice(0, nEvents); // Takes the first 5 of them.
    return selectedEvents;
  }
  return null;
};
