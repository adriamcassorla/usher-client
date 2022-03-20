import * as React from "react";

import { Button, View, FlatList, useSafeArea } from "native-base";
const filters = [
  "filter A",
  "filter B",
  "filter C",
  "filter D",
  "filter E",
  "filter F",
  "filter G",
];

type Props = { isTop: boolean };
const FilterMenu = ({ isTop }: Props) => {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 1,
  });

  //TODO: Create a proper render item function for filter buttons. Can we use a subcomponent? - YES!!
  const _renderItem = ({ item }: { item: string }) => {
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
