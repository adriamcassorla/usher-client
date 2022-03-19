import { Text } from "react-native";
import * as React from "react";

import { Button, View, FlatList, useSafeArea } from "native-base";

type Props = { isTop: boolean };
const FilterMenu = ({ isTop }: Props) => {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 1,
  });

  const filters = [
    "filter A",
    "filter B",
    "filter C",
    "filter D",
    "filter E",
    "filter F",
    "filter G",
  ];

  //TODO: Create a proper render item function for filter buttons. Can we use a subcomponent?
  const _renderItem = ({ item, index, separator }) => {
    return (
      <Button ml={3} borderRadius={20}>
        {item}
      </Button>
    );
  };

  return (
    <View bg={"dark.50:alpha.95"} {...safeAreaProps} pb={"4"}>
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
  );
};

export default FilterMenu;
