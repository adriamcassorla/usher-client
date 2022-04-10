import { Flex, Circle, Icon, Pressable, Box } from 'native-base';
import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavType } from '../../utils/Types/navTypes';
import FavButton from '../FavButton';

const EventHeader = ({ eventId }: { eventId: number }) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<MainStackNavType>();
  return (
    <Flex
      position={'absolute'}
      top={top}
      left={0}
      w={'full'}
      flexDirection={'row'}
      justifyContent={'space-between'}
    >
      <Pressable
        onPress={() => navigation.goBack()}
        ml={3}
        p={2}
        borderRadius="full"
        w={10}
        h={10}
        variant={'unstyled'}
        bg="white"
        _pressed={{ opacity: 0.5 }}
        opacity={0.8}
      >
        <Icon
          as={Ionicons}
          name={'md-arrow-back'}
          color={'primary.500'}
          size={6}
        />
      </Pressable>

      <Box mr={3}>
        <FavButton eventId={eventId} />
      </Box>
    </Flex>
  );
};

export default EventHeader;
