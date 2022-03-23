import * as React from 'react';
import { Center, FlatList, Image, HStack, Text, View, Box } from 'native-base';

import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import {
  BottomTabScreenType,
  ProfileStackParamList,
} from '../../utils/Types/navTypes';
import GradientProvider from '../../components/GradientProvider';
import { AsyncStorage } from 'react-native';
type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Tickets'>,
  BottomTabScreenType
>;

type RenderParams = {
  item: Ticket;
};

const Tickets = ({ navigation, route }: Props) => {
  const renderItem = ({ item }: RenderParams) => {
    console.log(item);
    return (

      <HStack borderRadius={4} overflow='hidden' my="3" bg="blue.800" w="330" h="120">
        <Image
          src={item.show.event.image}
          alt={`${item.show.event.name} poster`}
          w={'120'}
          h={'full'}
          />
        <Box bg="white">
          <Text fontStize="sm">
            {/* {item.show.event.venue.name} */}
            EVENT CARD
            </Text>
        </Box>
      </HStack>
    );
  };

  return (
    <GradientProvider>
      <View h={'full'} w={'full'} alignItems="center" pt="10">
        <Text fontSize="2xl" w="90%" bold color="white">
          Your tickets:{' '}
        </Text>
        <FlatList
          width={'full'}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          keyExtractor={(item: Ticket) => String(item.id)}
          renderItem={renderItem}
          data={route.params.tickets}
        />
      </View>
    </GradientProvider>
  );
};

export default Tickets;
