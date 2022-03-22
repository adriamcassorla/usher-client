import { Button, Divider, FlatList, Text } from 'native-base';
import * as React from 'react';
import { useReducer, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Highlights, FilterMenu, EventCard } from './';

type Props = { events: EventType[] | null };
type renderParams = {
  item: EventType | 'top' | 'filter' | 'divider' | 'reset_button';
};

const HomeList = ({ events }: Props) => {
  const { top } = useSafeAreaInsets();
  const [isOnTop, setIsOnTop] = useState(false);

  const [state, dispatch] = useReducer(reducer, events);

  function reducer(state: any, action: any) {
    switch (action) {
      case 'Comedy':
        console.log('Comedy button hit');
        return state.filter((e) => e.genres.includes('Comedia'));
      case 'init':
        console.log('clearing filters');
        return events;
      default:
        console.log('reducer activated with action', action);
        return state;
    }
  }

  const _renderItem = ({ item }: renderParams) => {
    if (item === 'top') return <Highlights />;
    if (item === 'divider') return <Divider m="auto" w="85%" />;
    if (item === 'filter')
      return <FilterMenu dispatch={dispatch} isOnTop={isOnTop} />;
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
      data={['top', 'divider', 'filter', ...state/*, 'reset_button'*/]}
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
