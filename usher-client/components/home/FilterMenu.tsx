import * as React from "react";

import { Button, View, FlatList } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

const filters = [
  "filter A",
  "filter B",
  "filter C",
  "filter D",
  "filter E",
  "filter F",
  "filter G",
];

type Props = { isOnTop: boolean };

const FilterMenu = ({ isOnTop }: Props) => {
  const { top } = useSafeAreaInsets();
  //TODO: Create a proper render item function for filter buttons. Can we use a subcomponent? - YES!!
  const _renderItem = ({ item }: { item: string }) => {
    return (
      <Button ml={3} borderRadius={20}>
        {item}
      </Button>
    );
  };

  return (
    <BlurView intensity={isOnTop ? 100 : 0} tint="dark">
      <View pb={"4"} pt={`${top}px`} >
        <FlatList
          showsHorizontalScrollIndicator={false}
          px={2}
          data={filters}
          renderItem={_renderItem}
          keyExtractor={(item) => {
            //Hacky key extractor
            return String(item);
          }}
          horizontal
        />
      </View>
    </BlurView>
  );
};

export default React.memo(FilterMenu);
