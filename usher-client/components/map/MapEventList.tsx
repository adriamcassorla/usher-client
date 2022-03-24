import { Dimensions, FlatList } from "react-native";
import { Box, Text, PresenceTransition } from "native-base";
import * as React from "react";
import { useEffect, useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import MiniEventCard from "../search/MiniEventCard";

type Props = {
  venueId: string;
  events: EventType[];
};

const MapEventList = ({ venueId, events }: Props) => {
  const tabBarHeight = useBottomTabBarHeight();
  const height = 150;
  const top = Dimensions.get("screen").height - height - tabBarHeight;
  const [venueEvents, setVenueEvents] = useState<EventType[] | null>(null);

  const _renderItem = ({ event }: { event: EventType }) => (
    <MiniEventCard event={event}></MiniEventCard>
  );

  useEffect(() => {
    setVenueEvents(events.filter((event) => event.venue.id === venueId));
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
      <BlurView
        intensity={70}
        style={{
          position: "absolute",
          height,
          top,
          width: "100%",
        }}
      >
        {venueEvents ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingEnd: 12 }}
            data={venueEvents}
            renderItem={_renderItem}
            keyExtractor={(_item, index) => {
              return String(index);
            }}
            horizontal
          />
        ) : null}
      </BlurView>
    </PresenceTransition>
  );
};

export default MapEventList;
