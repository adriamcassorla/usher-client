import * as React from 'react';
import { Box, Text, ZStack, Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable } from 'react-native';

import { MainStackNavType } from '../../utils/Types/navTypes';
import { capitalize } from '../../utils/helpers/home';

type Props = {
  event: EventType;
  copy: string;
  promo: string;
};

const HighlightCard = ({ event, copy, promo }: Props) => {
  const navigation = useNavigation<MainStackNavType>();

  const image = { uri: event.image };

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Event', {
          eventId: event.id,
          todayShow: event.today_shows,
        })
      }
    >
      <Box overflow={'hidden'} borderRadius={20} w={320} h={320} key={event}>
        <ZStack
          alignItems="center"
          justifyContent="center"
          w={'full'}
          h={'full'}
        >
          <Image w={'full'} h={'full'} source={image} alt={`${event.name}`} />
          <LinearGradient
            style={{ flex: 1, width: 320, height: 320 }}
            colors={['transparent', 'rgba(0,0,0,.3)', 'rgba(0,0,0,.9)']}
          />
          <Box
            px={2}
            pt={0}
            mb={2}
            width="full"
            position="absolute"
            top="230"
            justifyContent="center"
          >
            <Text bold fontSize="xl" color={'white'}>
              {capitalize(event.name)}
            </Text>
            <Text fontWeight="medium" color={'light.50'}>
              {copy}
            </Text>
          </Box>
        </ZStack>
      </Box>
    </Pressable>
  );
};

export default React.memo(
  HighlightCard,
  (prev, next) => prev.event.id === next.event.id
);
