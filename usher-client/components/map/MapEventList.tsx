import { Dimensions, FlatList } from "react-native";
import { Box, Text, PresenceTransition, Center, View } from "native-base";
import * as React from "react";
import { useEffect, useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import MiniEventCard from "../search/MiniEventCard";
import Carousel from "react-native-snap-carousel";

type Props = {
  venueId: string | null;
  events: EventType[] | null;
};

const MapEventList = ({ venueId, events }: Props) => {
  const tabBarHeight = useBottomTabBarHeight();
  const height = 150;
  const width = Dimensions.get("screen").width;
  const top = Dimensions.get("screen").height - height - tabBarHeight;
  const [venueEvents, setVenueEvents] = useState<EventType[] | null>(null);

  const _renderItem = ({ item }: { item: EventType }) => (
    <Box
      bg={"dark.59:alpha.90"}
      h={"120px"}
      rounded={20}
      shadow={10}
      mt={"3%"}
      justifyContent={"center"}
    >
      <MiniEventCard event={item}></MiniEventCard>
    </Box>
  );

  useEffect(() => {
    if (events) {
      setVenueEvents(events.filter((event) => event.venue.id === venueId));
    }
  }, [venueId, events]);

  return (
    <PresenceTransition
      visible={venueId ? true : false}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 100,
        },
      }}
    >
      <View position={"absolute"} height={height} top={top} with={"full"}>
        {venueEvents ? (
          <Carousel
            sliderWidth={width}
            itemWidth={width * 0.98}
            data={venueEvents}
            renderItem={_renderItem}
            horizontal={true}
            firstItem={0}
            loop={false}
          />
        ) : null}
      </View>
    </PresenceTransition>
  );
};

export default MapEventList;
