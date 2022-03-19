import { Text } from 'react-native';
import React from 'react';

import { Button, View, FlatList } from 'native-base';

const FilterMenu = () => {
  const filters = [
    'filter A',
    'filter B',
    'filter C',
    'filter D',
    'filter E',
    'filter F',
    'filter G'
  ];

  //TODO: Create a proper render item function for filter buttons. Can we use a subcomponent?
  const _renderItem = ({item, index, separator}) => {
    return (<Button ml={1}>{item}</Button>);
  };

  return (
    <View py={'3'} bg={'amber.300'}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        margin={2}
        data={filters}
        renderItem={_renderItem}
        keyExtractor={(item)=> {
          //Hacky key extractor
          return String(item)}}
        horizontal
      />
    </View>
  );
};

export default FilterMenu;
