import * as React from "react";
import { useEffect, useState } from "react";
import { ScrollView, Image, View } from "native-base";
import { Text, StyleSheet } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainStackParamList } from "../../utils/Types/navTypes";
import { getEventInfo } from "../../services/api/events";
import { EventFooter, EventHeader, EventHero } from "../../components/event";
import EventTabView from "../../components/event/EventTabView";
import EventTabHeader from "../../components/event/EventTabHeader";
type Props = NativeStackScreenProps<MainStackParamList, "Event">;

const Event = ({ route }: Props) => {
  const { eventId, todayShow } = route.params;
  const [eventInfo, setEventInfo] = useState<EventType | null>(null);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    getEventInfo(eventId, todayShow.length ? true : false).then(setEventInfo);
  }, [eventId]);

  if (!eventInfo) return null;
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[3]}
      bg={"light.50"}
      showsVerticalScrollIndicator={false}
    >
      <Image
        src={eventInfo.image}
        alt="Main event image"
        w={"full"}
        h={"350px"}
        mb={-50}
        resizeMode="cover"
      />
      <EventHeader></EventHeader>
      <EventHero event={eventInfo}></EventHero>
      <EventTabHeader tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <EventTabView event={eventInfo} tabIndex={tabIndex}></EventTabView>
      {/* <EventFooter></EventFooter> */}
    </ScrollView>
  );
};

export default Event;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 500,
  },
});
