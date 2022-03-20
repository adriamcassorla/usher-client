import { FlatList, Text } from "native-base";
import * as React from "react";
import { Highlights, FilterMenu, EventCard } from "./";

type Props = { events: EventType[] | null };
type renderParams = {
  item: EventType | "top" | "filter";
};

const HomeList = ({ events }: Props) => {
  if (!events) return <Text>Loading...</Text>;

  const _renderItem = ({ item }: renderParams) => {
    if (item === "top") return <Highlights />;
    if (item === "filter") return <FilterMenu isTop={false} />;
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
    />
  );
};

export default React.memo(HomeList);
