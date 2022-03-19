import React, { useState } from 'react';

import { Center, Input, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import MiniEventCardList from '../../components/search/MiniEventCardList';

const Search = ({navigation}) => {
  // TODO: Bring in events from context. Implement search regex logic. setResult with input onChange
  // NOTE: Let results default to null until user starts typing

  const [result, setResult] = useState([
    'array',
    'of',
    'events',
    'from',
    'context',
    'array'
  ]);

  return (
    <Center>
      <Input
        mt={32}
        placeholder="Search"
        placeholderTextColor='black'
        variant="filled"
        width="80%"
        borderRadius="10"
        py="3"
        borderWidth="0"
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="gray.400"
            as={<Ionicons name="ios-search" />}
          />
        }
      />
      <MiniEventCardList navigation={navigation} events={result}/>
    </Center>
  );
};

export default Search;
