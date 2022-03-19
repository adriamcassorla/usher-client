import * as React from "react";
const { useState } = React;

import { View, FlatList } from "native-base";

import MiniEventCard from "../../components/search/MiniEventCard";
import SearchBar from "../../components/search/SearchBar";

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
type Props = BottomTabScreenProps<HomeTabParamList, "Search">;

const Search = ({ navigation }: Props) => {
  // TODO: Bring in events from context. Implement search regex logic. setResult with input onChange
  // NOTE: Let results default to null until user starts typing

  const [results, setResults] = useState([
    "_SEARCHBAR",
    "array",
    "of",
    "events",
    "from",
    "context",
    "array",
  ]);

  const _renderItem = ({ item, index }) => {
    if (index === 0) return <SearchBar setResults={setResults} />;
    return <MiniEventCard event={item} />;
  };

  return (
    <View w="full" h="full">
      <FlatList
        data={results}
        stickyHeaderIndices={[0]}
        renderItem={_renderItem}
        keyExtractor={(item) => {
          //Hacky key extractor
          return String(item);
        }}
      />
    </View>
  );
};

export default Search;
