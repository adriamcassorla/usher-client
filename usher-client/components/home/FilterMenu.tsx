import { Text } from 'react-native';
import React from 'react';

import { Button, View, FlatList } from 'native-base';

const FilterMenu = () => {
  const filters = [
    'genre A',
    'genre B',
    'genre C',
    'genre D',
    'genre E',
    'genre F',
  ];

  //TODO: Create a proper render item function for filter buttons. Can we use a subcomponent?
  const _renderItem = ((item, index, separator) => (<Button ml={1}>A very very long filter</Button>))

  return (
    <View py={'3'} bg={'amber.300'}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        margin={2}
        data={filters}
        renderItem={_renderItem}
        horizontal
      />
    </View>
  );
};

export default FilterMenu;
