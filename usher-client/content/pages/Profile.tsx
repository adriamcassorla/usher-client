import * as React from "react";
const { useEffect, useState } = React;
import { Center, Button, Text } from "native-base";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeTabParamList, StackScreenType } from "../../utils/Types/navTypes";
type Props = CompositeScreenProps<
  StackScreenType,
  BottomTabScreenProps<HomeTabParamList, "ProfileStack">
>;

const Profile = ({ navigation }: Props) => {
  //TODO: Get setUser from context to log out

  //TODO: Make API call and set profile data using ID from params
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    console.log("Getting profile info using id from params");
  }, []);
  // TODO: Pass user info down in navigation props to tix and favs

  return (
    <Center h={"full"} w={"full"} bgColor={"dark.50"}>
      <Text>Profile</Text>
      <Button
        colorScheme="primary"
        onPress={() => {
          navigation.navigate("Tickets");
        }}
      >
        Tickets
      </Button>
      <Button
        colorScheme="secondary"
        onPress={() => {
          navigation.navigate("Favorites");
        }}
      >
        Favorites
      </Button>
      <Button
        colorScheme="secondary"
        onPress={() => {
          console.log("I need to get the user context to log you out!");
          //setUser(false)
        }}
      >
        Log out
      </Button>
    </Center>
  );
};

export default Profile;
