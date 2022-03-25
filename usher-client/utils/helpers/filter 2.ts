export const filterEvents = (events: EventType[], filters:string[]) => {
  if (events) {
    let evs = events;
    if (filters.includes('Today'))
      evs = evs.filter((e) => e.today_shows.length);
    if (filters.includes('Under 20€'))
      evs = evs?.filter((e) => e.price <= 20);

    let genreFilters: string[] = [];
    if (filters.includes('Comedy'))
      genreFilters.push('Comedia', 'Comèdia', 'Tragicomedia');
    if (filters.includes('Drama')) genreFilters.push('Tragedia', 'Tragicomedia');
    if (filters.includes('Musical')) genreFilters.push('Musical');

    if (genreFilters.length) {
      evs = evs.filter((ev) =>
        genreFilters.some((genre) => ev.genres.includes(genre))
      );
      return evs;
    } else return evs;
  }
  return [];
};