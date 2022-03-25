import * as React from 'react';
import { Modal, Pressable } from 'react-native';
import {
  Text,
  View,
  SectionList,
} from 'native-base';

import GradientProvider from '../../components/GradientProvider';
import TicketCard from '../../components/profile/TicketCard';
import QRModal from '../../components/profile/QRModal';
import { isValid, sortTickets } from '../../utils/helpers/tickets';
import { UserContext } from '../../services/contexts/UserContext';


const Tickets = () => {
  const {user} = React.useContext(UserContext)
  const sections = sortTickets(user!.tickets);

  const [modalId, setModalId] = React.useState<string | null>(null);

  const renderItem = ({ item }: { item: Ticket }) => {
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
