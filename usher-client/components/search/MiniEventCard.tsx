import { Text, Image, HStack, VStack } from 'native-base';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavType } from '../../utils/Types/navTypes';
import { capitalize } from '../../utils/helpers/home';
import { Pressable } from 'react-native';

type Props = {
  event: EventType;
};

const MiniEventCard = ({ event }: Props) => {
  const navigation = useNavigation<MainStackNavType>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Event', {
          eventId: event.id,
          todayShow: event.today_shows,
        })
      }
    >
      <HStack
        mb={2}
        style={{
          alignSelf: 'center',
          width: '90%',
          backgroundColor: 'transparent',
          paddingX: 2,
        }}
      >
        <Image
          style={{width:60, height:86, overflow:'hidden', borderRadius: 6 }}
          src={event.poster}
          alt={`${event.name} poster`}
          resizeMode="stretch"
        />
        <VStack paddingLeft={4} paddingTop={1}>
          <Text fontSize="md" fontWeight="medium" color="white">
            {capitalize(event.name)}
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="light.200">
            {capitalize(event.venue.name)}
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="white" underline>
            {`Tickets from ${event.price}€`}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default MiniEventCard;
