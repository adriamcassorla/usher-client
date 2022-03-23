import * as React from "react";
import { Box, Text, ZStack, Image, Badge } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable } from "react-native";

import { MainStackNavType } from "../../utils/Types/navTypes";
import { capitalize } from "../../utils/helpers/home";

type Props = {
  event: EventType;
  copy: string;
  promo: string;
};

const HighlightCard = ({ event, copy, promo }: Props) => {
  const navigation = useNavigation<MainStackNavType>();

  const image = { uri: event.image };

  // Select a random colorScheme from nativebase defaults
  const schemes = ["primary.600", "secondary.600", "tertiary.600"];
  const badgeScheme = schemes[Math.floor(Math.random() * 3)];

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Event", {
          eventId: event.id,
          todayShows: event.today_shows,
        })
      }
    >
      <Box overflow={"hidden"} borderRadius={20} w={310} h={310} key={event}>
        <ZStack
          alignItems="center"
          justifyContent="center"
          w={"full"}
          h={"full"}
        >
          <Image w={"full"} h={"full"} source={image} alt={`${event.name}`} />
          <LinearGradient
            style={{ flex: 1, width: 310, height: 310 }}
            colors={["transparent", "rgba(0,0,0,.3)", "rgba(0,0,0,.9)"]}
          />
          <Box
            px={2}
            pt={0}
            mb={2}
            width="full"
            position="absolute"
            top="180"
            justifyContent="center"
          >
            <Badge w={32} p={0} variant="solid" backgroundColor={badgeScheme}>
              <Text color="white">{promo}</Text>
            </Badge>
            <Text bold fontSize="xl" color={"white"}>
              {capitalize(event.name)}
            </Text>
            <Text fontWeight="medium" color={"light.50"}>
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
