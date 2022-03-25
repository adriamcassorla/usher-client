import { View, Text, HStack, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { capitalize } from "../../utils/helpers/home";
const moment = require("moment");
require("moment/locale/en-gb");
moment.locale("en-gb");

const EventStats = ({ event }: { event: EventType }) => {
  const stats = [
    {
      stat: event.language ? "Language: " + event.language : null,
      icon: "globe-outline",
    },
    {
      stat: event.duration
        ? "Duration: " + String(event.duration + "min")
        : null,
      icon: "time-outline",
    },
    {
      stat: event.genres.length
        ? "Generes: " + event.genres.join("  |  ")
        : null,
      icon: "pizza-outline",
    },
    {
      stat: event.next_show
        ? "Next Show: " + moment(Number(event.next_show.date)).calendar()
        : null,
      icon: "calendar-outline",
    },
  ];

  const statWithIcon = (stat: String, icon: string) => (
    <HStack alignItems={"center"} mt="5" key={stat}>
      <Icon mt={1} size="6" color="primary.300" as={<Ionicons name={icon} />} />
      {stat ? (
        <Text ml={2} fontSize={"md"} color={"light.900"}>
          {capitalize(stat)}
        </Text>
      ) : null}
    </HStack>
  );

  return (
    <View pb={30}>
      {stats.map((stat) =>
        stat.stat ? statWithIcon(stat.stat, stat.icon) : null
      )}
    </View>
  );
};

export default EventStats;
