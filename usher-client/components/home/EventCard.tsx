import * as React from "react";
import { todayDates, capitalizeName } from "../../utils/helpers/home";

import {
  Pressable,
  Image,
  VStack,
  Box,
  Heading,
  Text,
  HStack,
} from "native-base";

import { useNavigation } from "@react-navigation/native";
import { MainStackNavType } from "../../utils/Types/navTypes";

type Props = {
  event: EventType;
};

const EventCard = ({ event }: Props) => {
  const navigation = useNavigation<MainStackNavType>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Event", {
          eventId: event.id,
          todayShow: event.today_shows,
        })
      }
    >
      <Box
        alignSelf={"center"}
        bg="light.50"
        shadow={2}
        mb={3}
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
        <Text
          bold
          fontSize="lg"
          position="absolute"
          color="white"
          top={0}
          m={[3, 3, 8]}
        >
          {event.type}
        </Text>

        <HStack position="absolute" top={100}>
          {event.today_shows.length > 2 && (
            <Text bold color="white" fontSize="2xl">
              Multiple shows!
            </Text>
          )}
          {event.today_shows.length && event.today_shows.length < 3
            ? todayDates(event)?.map((date) => (
                <Box key={Math.random()} w={32} h={8} m={[3, 3, 0, 3]}>
                  <Text bold color="white" fontSize="2xl">
                    {date}
                  </Text>
                </Box>
              ))
            : null}
          {event.today_shows.length === 0 ? (
            <Text
              bold
              color="white"
              fontSize={"xl"}
              alignSelf={"flex-end"}
              textAlign={"right"}
              w={"full"}
              pr={3}
              h={8}
            >
              ...more shows soon
            </Text>
          ) : null}
        </HStack>

        <VStack bgColor={"dark.300"} roundedBottom="md">
          <Heading p={3} color={"light.100"}>
            {capitalizeName(event)}
          </Heading>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default React.memo(
  EventCard,
  (prev, next) => prev.event.id === next.event.id
);
