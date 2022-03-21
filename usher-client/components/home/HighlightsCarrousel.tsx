import * as React from 'react';

import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import HighlightCard from './HighlightCard';
import { getMockCopy, getMockPromos } from '../../utils/helpers/home';

type Props = {
  topEvents: EventType[];
};

const HighlightsCarrousel = ({ topEvents }: Props) => {
  const [copy, setCopy] = React.useState<string[]>(['']);
  const [promos, setPromos] = React.useState<string[]>(['']);

  React.useEffect(() => {
    setCopy(getMockCopy(topEvents.length));
    setPromos(getMockPromos(topEvents.length));
  }, []);

  const _renderItem = ({ item, index }: { item: EventType; index: number }) => {
    return (
      <HighlightCard
        event={item}
        copy={copy[index]}
        promo={promos[index]}
      />
    );
  };

  return (
    <Carousel
      style={{ borderColor: 'green', borderWidth: 5, borderStyle: 'solid' }}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={290}
      data={topEvents}
      renderItem={_renderItem}
      horizontal={true}
      firstItem={1}
      loop={false}
    />
  );
};

export default React.memo(HighlightsCarrousel);
