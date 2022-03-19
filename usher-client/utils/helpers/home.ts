import { DateTime } from 'luxon';

export const todayDates = (event: EventType) => {
  if (event.today_shows.length === 0) return null;
  return event.today_shows.map((show) =>
    DateTime.fromMillis(Number(show.date)).toLocaleString(DateTime.TIME_SIMPLE)
  );
};

export const capitalizeName = (event: EventType) => {
  return event.name
    .toLowerCase()
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
