import * as React from 'react';
import { useState, useContext } from 'react';

import { View, FlatList, Text, Button } from 'native-base';

import MiniEventCard from '../../components/search/MiniEventCard';
import SearchBar from '../../components/search/SearchBar';
import { EventsContext } from '../../services/contexts/EventsContext';
import GradientProvider from '../../components/GradientProvider';
import { sendPushNotification } from '../../utils/helpers/notifications';

const Search = () => {
  const { events } = useContext(EventsContext);
  const [results, setResults] = useState<EventType[] | null>(null);
  const [isSearching, setIsSearching] = useState<Boolean>(false);
  type renderParams = {
    item: EventType;
  };

  const _renderItem = ({ item }: renderParams) => {
    return <MiniEventCard event={item} />;
  };

  return (
    <GradientProvider>
      <View w="full" h="full" alignItems="center">
        <SearchBar
          events={events}
          setResults={setResults}
          setIsSearching={setIsSearching}
        />
        {isSearching && (
          <Text
            w="90%"
            textAlign="left"
            fontSize="md"
            fontWeight="medium"
            color="white"
            mb={2}
          >
            {results?.length
              ? `Found ${results.length} event${
                  results.length > 1 ? 's' : ''
                } matching your search`
              : 'No results. Try something else!'}
          </Text>
        )}
        <FlatList
          width="100%"
          data={results}
          renderItem={_renderItem}
          keyExtractor={(item) => String(item.id)}
        />
        {/* <Button
          onPress={async () =>
            await sendPushNotification(
              'ExponentPushToken[qVeyR8Ngx4Pxe8gY2m04ry]'
            )
          }
        >
          This is a button
        </Button> */}
      </View>
    </GradientProvider>
  );
};

export default Search;
