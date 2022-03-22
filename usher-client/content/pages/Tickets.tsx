import * as React from 'react';
import { Center, FlatList, Text, View } from 'native-base';

import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import {
  BottomTabScreenType,
  ProfileStackParamList,
} from '../../utils/Types/navTypes';
import GradientProvider from '../../components/GradientProvider';
import { AsyncStorage } from 'react-native';
type Props = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'Favorites'>,
  BottomTabScreenType
>;

const Tickets = ({ navigation, route }: Props) => {
  React.useEffect(() => {
    console.log(route)
  }, [])

  const test = async () => {
    const token = await AsyncStorage.getItem('user');
    console.log(token)
  }
   test();

  return (
    <GradientProvider>
      <View h={'full'} w={'full'} alignItems="center" pt="10">
        <Text fontSize="2xl" w="90%" bold color="white">
          Your tickets:{' '}
        </Text>
        {/* <FlatList
          keyExtractor={(item) => item.id}
          renderItem={renderitem}
          data={mocktickets}
        /> */}
      </View>
    </GradientProvider>
  );
};

export default Tickets;
