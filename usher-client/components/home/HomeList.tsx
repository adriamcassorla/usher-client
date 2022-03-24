import { FlatList, Spinner, Text } from "native-base";
import * as React from "react";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { filterEvents } from "../../utils/helpers/filter";
import { Highlights, FilterMenu, EventCard } from "./";

type Props = { events: EventType[] | null };
type renderParams = {
  item: EventType | "top" | "filter";
};

const HomeList = ({ events }: Props) => {
  const { top } = useSafeAreaInsets();
  const [isOnTop, setIsOnTop] = useState(false);

  const [filtered, setFiltered] = useState(events);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    if (events) {
      setFiltered(filterEvents(events, filters));
    }
  }, [filters]);

  const _renderItem = ({ item }: renderParams) => {
    if (item === "top") return <Highlights />;
    if (item === "filter")
      return (
        <FilterMenu
          filters={filters}
          setFilters={setFilters}
          isOnTop={isOnTop}
        />
      );
    return <EventCard event={item} />;
  };
  if (!events) return <Spinner color="primary.500" />;

  return (
    <FlatList
      // @ts-ignore
      data={["top", "filter", ...filtered]}
      stickyHeaderIndices={[1]}
      removeClippedSubviews={true}
      initialNumToRender={5}
      renderItem={_renderItem}
      keyExtractor={(item) =>
        typeof item === "string" ? item : String(item.id)
      }
      onScroll={(e) => {
        const yPos = e.nativeEvent.contentOffset.y;
        setIsOnTop(yPos >= 380 - top);
      }}
    />
  );
};

export default React.memo(HomeList);
