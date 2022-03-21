import * as React from 'react';
import { Box, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavType } from '../../utils/Types/navTypes';
import { ImageBackground, Pressable } from 'react-native';
import { getMockCopy, getMockPromo } from '../../utils/helpers/home';

type Props = {
  event: EventType;
};

const HighlightCard = ({ event }: Props) => {
  const navigation = useNavigation<MainStackNavType>();

  const promo = getMockPromo();
  const copy = getMockCopy();

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
      <Box overflow={'hidden'} borderRadius={10} w={250} h={250} key={event}>
        <ImageBackground
          source={image}
          style={{ height: '100%', width: '100%', borderRadius:20 }}
        />
        <Text position={'absolute'} color={'white'}>
          {copy}
        </Text>
      </Box>
    </Pressable>
  );
};

export default React.memo(
  HighlightCard,
  (prev, next) => prev.event.id === next.event.id
);
