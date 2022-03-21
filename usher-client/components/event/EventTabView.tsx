import { View } from "native-base";
import * as React from "react";
import { useEffect, useRef } from "react";
import PagerView from "react-native-pager-view";
import { EventInfo, VenueInfo } from "./";

type Props = {
  event: EventType;
  tabIndex: number;
};
const EventTabView = ({ event, tabIndex }: Props) => {
  const ref = useRef<PagerView>();

  useEffect(() => {
    ref.current?.setPage(tabIndex);
  }, [tabIndex]);

  return (
    //@ts-ignore
    <PagerView
      style={{ flex: 1 }}
      initialPage={0}
      collapsable={false}
      ref={ref}
      scrollEnabled={false}
    >
      <View key="1">
        <EventInfo event={event} />
      </View>
      <View key="2">
        <VenueInfo venue={event.venue} />
      </View>
    </PagerView>
  );
};

export default EventTabView;
