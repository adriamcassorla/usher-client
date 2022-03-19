import React from 'react';

import { ScrollView, FlatList, Text, View, Center, Button } from 'native-base';

import { Highlights, FilterMenu, EventCard } from '../../components/home';
import { TouchableHighlight } from 'react-native';

const Home = ({ navigation }) => {
  //TODO
  // 1: Make API call
  // 2. Set context
  // 3. Render real events

  const events = ['_HIGHLIGHTS', '_FILTERS',0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const _renderItem = ({ item, index, separators }) => {
      if (index === 0)return <Highlights/>;
      if (index === 1) return <FilterMenu/>;
      return (<EventCard event={item} navigation={navigation}/>)
  };

  return (
    <Center w='full' h='full'>
      <FlatList
        data={events}
        stickyHeaderIndices={[1]}
        renderItem={_renderItem}
        keyExtractor={(item)=> {
          //Hacky key extractor
          return String(item)}}
      />
    </Center>
  );
};

export default Home;
