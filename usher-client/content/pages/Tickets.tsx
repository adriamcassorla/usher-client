import * as React from 'react';
import {
  Center,
  FlatList,
  Image,
  HStack,
  Text,
  View,
  Box,
  Divider,
} from 'native-base';

import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import {
  BottomTabScreenType,
  ProfileStackParamList,
} from '../../utils/Types/navTypes';
import GradientProvider from '../../components/GradientProvider';
import { AsyncStorage, Pressable } from 'react-native';
import { capitalize } from '../../utils/helpers/home';
import TicketCard from '../../components/profile/TicketCard';
type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Tickets'>,
  BottomTabScreenType
>;

const Tickets = ({ navigation, route }: Props) => {
  const renderItem = ({ item }: { item: Ticket }) => {
    console.log(item);
    //TODO Make QR code modal on press
    return (
      <Pressable onPress={() => console.log('show qr code', item.id)}>
        <TicketCard ticket={item} />
      </Pressable>
    );
  };

  return (
    <GradientProvider>
      <View h={'full'} w={'full'} alignItems="center" pt="10">
        <Text fontSize="2xl" w="90%" bold color="white">
          Your tickets:
        </Text>
        <FlatList
          width={'full'}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          keyExtractor={(item: Ticket) => String(item.id)}
          renderItem={renderItem}
          data={route.params.tickets.sort((a,b) => +a.show.date - +b.show.date)}
        />
      </View>
    </GradientProvider>
  );
};

export default Tickets;
