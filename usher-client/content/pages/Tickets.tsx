import * as React from 'react';
import { Text, View, Divider, SectionList, HStack } from 'native-base';

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
import { sortTickets } from '../../utils/helpers/tickets';
type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Tickets'>,
  BottomTabScreenType
>;

const Tickets = ({ navigation, route }: Props) => {
  const sections = sortTickets(route.params.tickets);
  const renderItem = ({ item }: { item: Ticket }) => {
    //TODO Make QR code modal on press
    return (
      <Pressable onPress={() => console.log('show qr code', item.id)}>
        <TicketCard ticket={item} />
      </Pressable>
    );
  };

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => (
    <HStack w={330}>
      <Text
        fontSize="2xl"
        bold
        color={title === 'Active tickets' ? 'white' : 'light.300'}
      >
        {title}
      </Text>
    </HStack>
  );

  return (
    <GradientProvider>
      <View h={'full'} w={'full'} alignItems="center" pt="10">
        <SectionList
          width={'full'}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          keyExtractor={(item: Ticket) => String(item.id)}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          sections={sections}
          stickySectionHeadersEnabled={false}
        />
      </View>
    </GradientProvider>
  );
};

export default Tickets;
