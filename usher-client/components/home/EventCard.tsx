import React from 'react';

import {
  Pressable,
  Image,
  VStack,
  Box,
  Heading,
  Text,
} from 'native-base';

const EventCard = ({ event, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Event', { eventId: event.id })}
    >
      <Box
        alignSelf={'center'}
        m={2}
        bg="light.50"
        shadow={2}
        rounded="lg"
        w="90%"
      >
        <Image
          src={event.image}
          alt="image base"
          resizeMode="cover"
          height={150}
          roundedTop="md"
        />
        <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
          {event.type}
        </Text>
        <VStack>
          <Text color="gray.400">{event.date}</Text>
          <Heading>{event.name.toLowerCase()}</Heading>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default EventCard;
