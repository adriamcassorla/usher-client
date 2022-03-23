import * as React from 'react';
import { HStack, Text, Image, Center, Divider, Box } from 'native-base';
import { capitalize } from '../../utils/helpers/home';

const TicketCard = ({ ticket }: { ticket: Ticket }) => {
  return (
    <HStack
      borderRadius={4}
      overflow="hidden"
      aligntickets="center"
      my="3"
      bg="dark.800:alpha.30"
      w="330"
      h="120"
    >
      <Center w={'120'} h={'full'} p="1">
        <Image
          src={ticket.show.event?.image}
          alt={`${ticket.show.event?.name} poster`}
          borderRadius={4}
          overflow="hidden"
          w={'full'}
          h={'full'}
        />
      </Center>
      <Divider mx="1" style="dashed" h="90%" orientation="vertical" />
      <Box w="full" h="full" flex={1}>
        <Text bold fontSize="lg" fontColor="black">
          {capitalize(ticket.show.event.name)}
        </Text>
        <Text bold fontSize="lg" fontColor="black">
          {capitalize(ticket.show.event.venue?.name)}
        </Text>
        <Text bold fontSize="lg" fontColor="black">
          {capitalize(ticket.show.event?.name)}
        </Text>
      </Box>
    </HStack>
  );
};

export default TicketCard;
