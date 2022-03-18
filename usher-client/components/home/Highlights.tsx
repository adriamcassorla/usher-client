import { Text } from 'react-native';
import React from 'react';

import { Center, Flex } from 'native-base';

import Carousel from 'react-native-snap-carousel';

const Highlights = () => {
  const _renderItem = ({item}) => {
    return <Center bg={'primary.100'} w={200} h={200} key={item}>{item}</Center>
  }

  return (
    <Center h={'220'} w={'full'}>
      <Text style={{ margin: 20, textAlign: 'center' }}>Highlights</Text>
      <Carousel
        style={{borderColor:'green', borderWidth:5, borderStyle:'solid'}}
        sliderWidth={200}
        itemWidth={200}
        data={[1,2,3,4,5]}
        renderItem={_renderItem}
        horizontal={true}
      />
    </Center>
  );
};

export default Highlights;
