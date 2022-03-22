import * as React from 'react';
import { useCallback, useState, useContext } from 'react';

import { View, FlatList, Text } from 'native-base';

import MiniEventCard from '../../components/search/MiniEventCard';
import SearchBar from '../../components/search/SearchBar';
import { EventsContext } from '../../services/contexts/EventsContext';
import { useFocusEffect } from '@react-navigation/native';
import GradientProvider from '../../components/GradientProvider';

const Search = () => {

  const { events } = useContext(EventsContext);
  const [results, setResults] = useState<EventType[] | null>(null);


  type renderParams = {
    item: EventType;
  };

  const _renderItem = ({ item }: renderParams) => {
    return <MiniEventCard event={item} />;
  };

  return (
    <GradientProvider>
      <View w="full" h="full" alignItems='center'>
        <SearchBar
          events={events}
          setResults={setResults}
        />
        <FlatList
          width='100%'
          data={results}
          renderItem={_renderItem}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </GradientProvider>
  );
};

export default Search;
