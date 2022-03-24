import * as React from 'react';
import {
  Text,
  View,
  Divider,
  SectionList,
  HStack,
  Center,
  Box,
} from 'native-base';

import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import {
  BottomTabScreenType,
  ProfileStackParamList,
} from '../../utils/Types/navTypes';
import GradientProvider from '../../components/GradientProvider';
import { Modal, Pressable } from 'react-native';
import { capitalize } from '../../utils/helpers/home';
import TicketCard from '../../components/profile/TicketCard';
import { isValid, sortTickets } from '../../utils/helpers/tickets';
import { BlurView } from 'expo-blur';
import QRModal from '../../components/profile/QRModal';
type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Tickets'>,
  BottomTabScreenType
>;

const Tickets = ({ navigation, route }: Props) => {
  const [modalId, setModalId] = React.useState<string | null>(null);
  const sections = sortTickets(route.params.tickets);
  const renderItem = ({ item }: { item: Ticket }) => {
    //TODO Make QR code modal on press
    return (
      <Pressable disabled={!isValid(item)} onPress={() => setModalId(item.id)}>
        <TicketCard ticket={item} />
      </Pressable>
    );
  };

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => (
    <Text
      w={330}
      my={3}
      fontSize="2xl"
      bold
      color={title === 'Active tickets' ? 'white' : 'light.300'}
    >
      {title}
    </Text>
  );

  return (
    <GradientProvider>
      <View h={'full'} w={'full'} alignItems="center" mt={0}>
        <Modal animationType="fade" transparent visible={modalId != null}>
          <Pressable onPress={() => setModalId(null)}>
            {modalId && <QRModal ticketId={modalId}></QRModal>}
          </Pressable>
        </Modal>

        {sections.length ? (
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
        ) : (
          <Text w={330} my={3} fontSize="2xl" bold color={'white'}>
            No purchases yet...
          </Text>
        )}
      </View>
    </GradientProvider>
  );
};

export default Tickets;
