import { View, Text } from 'react-native';
import React, { useState } from 'react';

import { Center, Input, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import MiniEventCardList from '../../components/search/MiniEventCardList';

const Search = () => {
  const [result, setResult] = useState([
    'array',
    'of',
    'events',
    'from',
    'context',
  ]);

  return (
    <Center>
      <Input
        my={10}
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
      <MiniEventCardList events={result}/>
    </Center>
  );
};

export default Search;
