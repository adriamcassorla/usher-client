import * as React from 'react';

import {  View, FlatList } from 'native-base';
import { BlurView } from 'expo-blur';
import FilterButton from './FilterButton';

const filters = ['BCN', 'Today', 'Comedy', 'Tragedy', 'Musical', 'Under 20€'];

type Props = {
  isOnTop: boolean;
  dispatch: any;
};

const FilterMenu = ({ isOnTop, dispatch }: Props) => {
  const _renderItem = ({ item }: { item: string }) => {
    return (
      <FilterButton filter={item} dispatch={dispatch} />
    );
  };

  return (
    <BlurView intensity={isOnTop ? 100 : 0} tint="dark">
      <View py={5} justifyContent="space-around">
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingEnd:12}}
          data={filters}
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
