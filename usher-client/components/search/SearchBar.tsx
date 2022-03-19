import { Input, Icon, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";

const SearchBar = () => {
  return (
    <View p={2} bg={"amber.50"}>
      <Input
        alignSelf={"center"}
        mt={6}
        placeholder="Search"
        placeholderTextColor="black"
        variant="filled"
        width="80%"
        borderRadius="10"
        py="3"
        borderWidth="0"
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="gray.400"
            as={<Ionicons name="ios-search" />}
          />
        }
      />
    </View>
  );
};

export default SearchBar;
