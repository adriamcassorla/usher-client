import * as React from "react";

import {
  Pressable,
  Image,
  VStack,
  Box,
  Heading,
  Text,
  HStack,
} from "native-base";
import { todayDates, capitalizeName } from "../../utils/helpers/home";
import type { StackNavigationProp } from "@react-navigation/stack";
type MainStackNavType = StackNavigationProp<MainStackParamList>;

import { useNavigation } from "@react-navigation/native";
type Props = {
  event: EventType;
};

const EventCard = ({ event }: Props) => {
  const navigation = useNavigation<MainStackNavType>();

  return (
    <Pressable
      onPress={() => navigation.navigate("Event", { eventId: event.id })}
    >
      <Box
        alignSelf={"center"}
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
        <Text bold position="absolute" color="white" top={0} m={[3, 3, 8]}>
          {event.type}
        </Text>

        <Box position="absolute" top={100}>
          <HStack>
            {event.today_shows.length > 2 ? (
              <Text bold color="white" fontSize="2xl">
                Multiple shows
              </Text>
            ) : (
              todayDates(event)?.map((date) => (
                <Box key={Math.random()} w={32} h={8} m={[3, 3, 0, 3]}>
                  <Text bold color="white" fontSize="2xl">
                    {date}
                  </Text>
                </Box>
              ))
            )}
          </HStack>
        </Box>

        <VStack>
          <Heading p={3}>{capitalizeName(event)}</Heading>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default EventCard;
