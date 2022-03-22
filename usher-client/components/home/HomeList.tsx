import { Button, Divider, FlatList, Text } from 'native-base';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Highlights, FilterMenu, EventCard } from './';

type Props = { events: EventType[] | null };
type renderParams = {
  item: EventType | 'top' | 'filter' | 'divider' | 'reset_button';
};

const HomeList = ({ events }: Props) => {
  const { top } = useSafeAreaInsets();
  const [isOnTop, setIsOnTop] = useState(false);

  const [filtered, setFiltered] = useState(events);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => setFiltered(filterEvents()), [filters]);

  const filterEvents = () => {
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

  const _renderItem = ({ item }: renderParams) => {
    if (item === 'top') return <Highlights />;
    if (item === 'divider') return <Divider m="auto" w="85%" />;
    if (item === 'filter')
      return (
        <FilterMenu
          filters={filters}
          setFilters={setFilters}
          isOnTop={isOnTop}
        />
      );
    //TODO: Add clear filters button and number hidden feedback
    // if (item === 'reset_button')
    //   return (
    //     <Button variant="outline" style={{borderColor: 'white', borderRadius: 20, width:'70%'}}onPress={() => dispatch('init')}>
    //       <Text color='white'>
    //         Clear filters
    //         </Text>
    //     </Button>
    //   );
    return <EventCard event={item} />;
  };
  if (!events) return <Text>Loading...</Text>;

  return (
    <FlatList
      // @ts-ignore
      data={['top', 'divider', 'filter', ...filtered /*, 'reset_button'*/]}
      stickyHeaderIndices={[2]}
      removeClippedSubviews={true}
      initialNumToRender={5}
      renderItem={_renderItem}
      keyExtractor={(item) =>
        typeof item === 'string' ? item : String(item.id)
      }
      onScroll={(e) => {
        const yPos = e.nativeEvent.contentOffset.y;
        setIsOnTop(yPos >= 380 - top);
      }}
    />
  );
};

export default React.memo(HomeList);
