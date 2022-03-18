import { Text } from 'react-native';
import React from 'react';

import MiniEventCard from './MiniEventCard';
import { FlatList, View } from 'native-base';

const MiniEventCardList = ({ events }) => {

  //TODO: Create a proper render item function. Can we use MiniEventCard or need to render from here directly?
  const _renderItem = ((item, index, separator) => (<MiniEventCard/>))

  return (
    <View mt={6}>
      <Text style={{ textAlign: 'center' }}>Mini event cards List</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        margin={2}
        data={events}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default MiniEventCardList;
