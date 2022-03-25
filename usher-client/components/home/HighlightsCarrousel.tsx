import * as React from "react";

import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import HighlightCard from "./HighlightCard";
import { getMockCopy, getMockPromos } from "../../utils/helpers/home";
import { useStatusContext } from "../../services/contexts/StatusContext";

type Props = {
  topEvents: EventType[];
};

const HighlightsCarrousel = ({ topEvents }: Props) => {
  const [copy, setCopy] = React.useState<string[]>([""]);
  const [promos, setPromos] = React.useState<string[]>([""]);

  const { changeStatus } = useStatusContext();

  React.useEffect(() => {
    setCopy(getMockCopy(topEvents.length));
    setPromos(getMockPromos(topEvents.length));
  }, []);

  const _renderItem = ({ item, index }: { item: EventType; index: number }) => {
    return (
      <HighlightCard event={item} copy={copy[index]} promo={promos[index]} />
    );
  };

  return (
    <Carousel
      sliderWidth={Dimensions.get("window").width}
      itemWidth={320}
      data={topEvents}
      renderItem={_renderItem}
      hasParallaxImages={true}
      firstItem={1}
      loop={false}
      sliderHeight={370}
      onLayout={() => {
        setTimeout(() => changeStatus("loaded"), 100);
      }}
    />
  );
};

export default React.memo(HighlightsCarrousel);
