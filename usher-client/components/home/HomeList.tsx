import { FlatList, Text } from "native-base";
import * as React from "react";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Highlights, FilterMenu, EventCard } from "./";

type Props = { events: EventType[] | null };
type renderParams = {
  item: EventType | "top" | "filter";
};

const HomeList = ({ events }: Props) => {
  if (!events) return <Text>Loading...</Text>;

  const [isOnTop, setIsOnTop] = useState(false);
  const { top } = useSafeAreaInsets();

  const _renderItem = ({ item }: renderParams) => {
    if (item === "top") return <Highlights />;
    if (item === "filter") return <FilterMenu isOnTop={isOnTop} />;
    return <EventCard event={item} />;
  };

  return (
    <FlatList
      data={["top", "filter", ...events]}
      stickyHeaderIndices={[1]}
      removeClippedSubviews={true}
      initialNumToRender={5}
      renderItem={_renderItem}
      keyExtractor={(item) =>
        typeof item === "string" ? item : String(item.id)
      }
      onScroll={(e) => {
        const yPos = e.nativeEvent.contentOffset.y;
        setIsOnTop(yPos >= 370 - top);
      }}
    />
  );
};

export default React.memo(HomeList);
