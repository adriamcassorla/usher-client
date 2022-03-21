var moment = require('moment');

export const getMockCopy = (count: number) => {
  const copy = [
    "This season's hit show!",
    "This critics' favorite will defy all your expectations",
    'Get ready to be blown away',
    "Revisit a classic from the hand of the city's most renown company",
    'A legendary production returns to the city with its original cast',
    "Still haven't watched this masterpiece? What are you waiting for?",
    "Don't miss out on this promissing new show!",
  ];
  return copy.sort(() => 0.5 - Math.random()).slice(0, count);
};

export const getMockPromos = (count: number) => {
  const promos = [
    '25% off  today',
    'Limitted tickets',
    'Last shows',
    '5 national awards',
    '10% off double tickets',
    "Critic's choice",
  ];
  return promos.sort(() => 0.5 - Math.random()).slice(0, count);
};

export const todayDates = (event: EventType) => {
  if (event.today_shows.length === 0) return null;
  return event.today_shows
    .map((show) => moment(Number(show.date)).format('HH:mm '))
    .join('  |  ');
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
