import * as React from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, FlatList } from 'native-base';
import { BlurView } from 'expo-blur';
import FilterButton from './FilterButton';

const inputFilters = [
  // ** Not filtering by city atm
  // 'BCN',
  'Today',
  'Comedy',
  'Drama',
  'Musical',
  'Under 20€',
];

type Props = {
  isOnTop: boolean;
  setFilters: any;
  filters: any;
};

const FilterMenu = ({ isOnTop, setFilters, filters }: Props) => {
  const { top } = useSafeAreaInsets();


  const _renderItem = ({ item }: { item: string }) => {
    return (
      <FilterButton setFilters={setFilters} filters={filters} filter={item} />
    );
  };

  return (
    <BlurView intensity={isOnTop ? 100 : 0} tint="dark">
      <View pb={"4"} pt={`${top}px`} justifyContent="space-around">
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingEnd: 12 }}
          data={inputFilters}
          renderItem={_renderItem}
          keyExtractor={(_item, index) => {
            return String(index);
          }}
          horizontal
        />
      </View>
    </BlurView>
  );
};

export default React.memo(FilterMenu);
