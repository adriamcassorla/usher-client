import * as React from "react";
import { useCallback, useState, useContext } from "react";

import { View, FlatList, Text } from "native-base";

import MiniEventCard from "../../components/search/MiniEventCard";
import SearchBar from "../../components/search/SearchBar";
import { EventsContext } from "../../services/contexts/EventsContext";
import { useFocusEffect } from "@react-navigation/native";

const Search = () => {
  // TODO: Implement search regex logic. setResult with input onChange
  // NOTE: Let results default to null until user starts typing

  const { events } = useContext(EventsContext);
  const [results, setResults] = useState<EventType[] | null>(null);

  useFocusEffect(
    useCallback(() => {
      if (events) {
        setResults(events.splice(0, 2));
      }
    }, [events])
  );

  type renderParams = {
    item: EventType;
  };

  const _renderItem = ({ item }: renderParams) => {
    return <MiniEventCard event={item} />;
  };

  if (!results) return <Text>Loading...</Text>;
  return (
    <View w="full" h="full" bg={"dark.50"}>
      <SearchBar />
      <FlatList
        data={results}
        renderItem={_renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default Search;
