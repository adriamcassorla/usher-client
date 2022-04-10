import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScrollView, Image, Spinner } from 'native-base';
import { View, StyleSheet } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../utils/Types/navTypes';
import { getEventInfo } from '../../services/api/events';
import { EventFooter, EventHeader, EventHero } from '../../components/event';
import EventTabView from '../../components/event/EventTabView';
import EventTabHeader from '../../components/event/EventTabHeader';
import { useStatusContext } from '../../services/contexts/StatusContext';
type Props = NativeStackScreenProps<MainStackParamList, 'Event'>;

const Event = ({ route }: Props) => {
  const { eventId, todayShows } = route.params;
  const [eventInfo, setEventInfo] = useState<EventType | null>(null);
  const [tabIndex, setTabIndex] = useState(0);
  const { changeStatus } = useStatusContext();

  useEffect(() => {
    changeStatus('loading');
    getEventInfo(eventId, todayShows.length ? true : false)
      .then((data) => {
        setEventInfo(data);
      })
      .catch((error) => changeStatus('error', error));
  }, [eventId]);

  const imgHeight = 300;
  if (!eventInfo) return null;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        stickyHeaderIndices={[0, 2, 3]}
        bg={'light.50'}
        showsVerticalScrollIndicator={false}
      >
        <EventHeader eventId={eventId} />
        <Image
          src={eventInfo.image}
          alt="Main event image"
          w={'full'}
          h={`${imgHeight}px`}
          mb={-50}
          resizeMode="cover"
          onLoad={() => changeStatus('loaded')}
        />
        <EventHero event={eventInfo}></EventHero>
        <EventTabHeader tabIndex={tabIndex} setTabIndex={setTabIndex} />
        <EventTabView event={eventInfo} tabIndex={tabIndex}></EventTabView>
      </ScrollView>
      {todayShows.length ? (
        <EventFooter
          eventName={eventInfo.name}
          price={eventInfo.price}
          shows={eventInfo.today_shows}
        ></EventFooter>
      ) : null}
    </View>
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
    paddingBottom: 700,
  },
});
