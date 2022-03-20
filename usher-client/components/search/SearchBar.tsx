import { Input, Icon, View, useSafeArea } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";

const SearchBar = () => {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });
  return (
    <View pb={2} bg={"dark.100"} {...safeAreaProps}>
      <Input
        alignSelf={"center"}
        mt={1}
        placeholder="Search an event"
        placeholderTextColor="dark.900"
        variant="filled"
        width="80%"
        borderRadius="10"
        py="3"
        borderWidth="0"
        bg={"dark.200"}
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="dark.500"
            as={<Ionicons name="ios-search" />}
          />
        }
      />
    </View>
  );
};

export default SearchBar;
