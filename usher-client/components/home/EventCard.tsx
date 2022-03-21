import * as React from 'react';
import { todayDates, capitalize } from '../../utils/helpers/home';

import {
  Pressable,
  Image,
  VStack,
  Box,
  Text,
  HStack,
  Badge,
} from 'native-base';

import { useNavigation } from '@react-navigation/native';
import { MainStackNavType } from '../../utils/Types/navTypes';

const default_card_image = require('../../assets/default_card_image.jpg');

type Props = {
  event: EventType;
};

const EventCard = ({ event }: Props) => {
  const navigation = useNavigation<MainStackNavType>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Event', {
          eventId: event.id,
          isToday: event.today_shows.length ? true : false,
        })
      }
    >
      <Box
        alignSelf={'center'}
        bgColor={'dark.300'}
        shadow={2}
        mb={3}
        rounded="lg"
        w="90%"
      >
        <Image
          src={event.image}
          defaultSource={default_card_image}
          alt="image base"
          resizeMode="cover"
          height={150}
          roundedTop="md"
        />
        <Badge bg="tertiary.700" p={0}>
          <Text color="white" fontSize="xs">
            {event.type}
          </Text>
        </Badge>
        <HStack alignItems={'center'}>
          <VStack flex={4} pt={1} pl={2} pr={2} pb={2} roundedBottom="md">
            <Text color="white" fontWeight="medium" fontSize="md">
              {capitalize(event.name)}
            </Text>
            <Text color="light.200" fontWeight="medium" fontSize="sm">
              {capitalize(event.venue.name)}
            </Text>
            <Box>
              {event.today_shows.length ? (
                <Text color="white">Today at {todayDates(event)}</Text>
              ) : null}
            </Box>
          </VStack>

          <Text flex={1} color="white" fontWeight="medium" fontSize="lg">
            {event.price}€
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );
};

export default React.memo(
  EventCard,
  (prev, next) => prev.event.id === next.event.id
);
