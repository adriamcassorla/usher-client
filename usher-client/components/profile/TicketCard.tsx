import * as React from 'react';
import { HStack, Text, Image, Center, Divider, Box, ZStack } from 'native-base';
import { capitalize } from '../../utils/helpers/home';

import QRCode from 'react-native-qrcode-svg';
const QRlogo = require('../../assets/qrcodelogo.png');
import moment from 'moment';

const TicketCard = ({ ticket }: { ticket: Ticket }) => {
  const isValid =
    !ticket.used && +ticket.show.date > Date.now() + 1000 * 60 * 60;
  return (
    <HStack
      borderRadius={4}
      overflow="hidden"
      alignItems="center"
      my="2"
      bg={isValid ? "dark.700:alpha.30" : "dark.700:alpha.60"}
      w="330"
      h="120"
    >
      <Center w={'120'} h={'full'} p="1">
        {isValid ? (
          <QRCode
            value={ticket.id}
            size={110}
            enableLinearGradient={true}
            linearGradient={['#070c15', '#516b92']}
            logo={QRlogo}
            logoBackgroundColor="#FFFFFFb5"
            logoSize={40}
            logoBorderRadius={0}
          />
        ) : (
          <ZStack w={'full'} h={'full'}>
            <Image
              src={ticket.show.event?.image}
              alt={`${ticket.show.event?.name} poster`}
              borderRadius={4}
              overflow="hidden"
              w={'full'}
              h={'full'}
            />
            <Box w={'full'} h={'full'} bg="darkgray" opacity={0.7} />
          </ZStack>
        )}
      </Center>
      <Divider mx="1" style="dashed" h="90%" orientation="vertical" />
      <Box p={1} w="full" h="full" flex={1} justifyContent="center">
        <Text bold fontSize="md" color={isValid ? "white" : 'gray.700'}>
          {capitalize(ticket.show.event.name)}
        </Text>
        <Text fontSize="sm" color={isValid? "light.50":'gray.600'}>
          {capitalize(ticket.show.event.venue?.name)}
        </Text>
        <Text fontWeight="medium" fontSize="md" color={isValid? "light.100":"gray.600"}>
          {moment(Number(ticket.show.date)).format('MMM Do YY HH:mm')}
        </Text>
      </Box>
    </HStack>
  );
};

export default TicketCard;
