import * as React from 'react';
import { HStack, Text, Image, Center, Divider, Box } from 'native-base';
import { capitalize } from '../../utils/helpers/home';

import moment from 'moment';

const TicketCard = ({ ticket }: { ticket: Ticket }) => {
  return (
    <HStack
      borderRadius={4}
      overflow="hidden"
      alignItems="center"
      my="2"
      bg="dark.700:alpha.30"
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
      <Box p={1} w="full" h="full" flex={1} justifyContent='center'>
        <Text bold fontSize="md" color="white">
          {capitalize(ticket.show.event.name)}
        </Text>
        <Text fontSize="sm" color="light.50">
          {capitalize(ticket.show.event.venue?.name)}
        </Text>
        <Text fontWeight='medium' fontSize="md" color="light.100">
          {moment(Number(ticket.show.date)).format('MMM Do YY HH:mm')}
        </Text>
      </Box>
    </HStack>
  );
};

export default TicketCard;
