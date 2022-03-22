import * as React from "react";
const { useEffect, useState } = React;
import { Center, Button, Text, Heading, Image, VStack, Box, Row, Icon } from "native-base";
import { AsyncStorage } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { CompositeScreenProps } from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeTabParamList, StackScreenType } from "../../utils/Types/navTypes";
import GradientProvider from "../../components/GradientProvider";
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
    <GradientProvider>
      <VStack h={"full"} w={"full"} alignItems="center" justifyContent="space-evenly">
        <Box>
          <Image source={require('../../assets/mock_profile.jpeg')} alt="Usher icon" size="xl" width="130px" height="130px" borderRadius="100px" mt="60px"/>
        </Box>
        <Box>
          <Row justifyContent="space-evenly">
            <Box justifyContent="space-evenly">
              <Text color="light.100" mx="10px">Favorites</Text>
              <Text fontWeight="600" color="light.200">20</Text>
            </Box>
            <Box>
              <Text color="light.100" mx="10px">Tickets</Text>
              <Text fontWeight="600" color="light.200">20</Text>
            </Box>
            <Box>
              <Text color="light.100" mx="10px">Favorites</Text>
              <Text fontWeight="600" color="light.200">20</Text>
            </Box>
          </Row>
        </Box>
        <Row>
          <Button mx="10px" colorScheme="primary" width="100px" height="50px"
            onPress={() => {
              navigation.navigate("Tickets");
            }}
            >
            <Icon size={5} color={"light.100"} as={<Ionicons name={"fast-food-outline"} />} />
            Tickets
          </Button>
          <Button mx="10px" colorScheme="secondary" width="100px"
            onPress={() => {
              navigation.navigate("Favorites");
            }}
            >
            Favorites
          </Button>
        </Row>
        <Center>
          <Button colorScheme="secondary"
            onPress={async () => {
              console.log("Logged out!");
              const user = await AsyncStorage.removeItem("user");
            }}
            >
            Log out
          </Button>
          </Center>
      </VStack>
    </GradientProvider>
  );
};

export default Profile;
