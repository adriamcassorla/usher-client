import * as React from "react";

import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import HighlightCard from "./HighlightCard";

type Props = {
  topEvents: EventType[];
};

const HighlightsCarrousel = ({ topEvents }: Props) => {
  const _renderItem = ({ item }: { item: EventType }) => {
    return <HighlightCard event={item} />;
  };

  return (
    <Carousel
      style={{ borderColor: "green", borderWidth: 5, borderStyle: "solid" }}
      sliderWidth={Dimensions.get("window").width}
      itemWidth={250}
      data={topEvents}
      renderItem={_renderItem}
      horizontal={true}
      loop={true}
    />
  );
};

export default React.memo(HighlightsCarrousel);
