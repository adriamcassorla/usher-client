import * as React from "react";
import {
  Center,
  Button,
  Text,
  Image,
  VStack,
  Box,
  Row,
  Icon,
  Divider,
  Switch,
  useToast,
} from "native-base";
import { AsyncStorage } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { CompositeScreenProps } from "@react-navigation/native";
import { useUserContext } from "../../services/contexts/UserContext";

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeTabParamList, StackScreenType } from "../../utils/Types/navTypes";
import GradientProvider from "../../components/GradientProvider";
type Props = CompositeScreenProps<
  StackScreenType,
  BottomTabScreenProps<HomeTabParamList, "ProfileStack">
>;

const Profile = ({ navigation }: Props) => {
  const { user, populateUser } = useUserContext();
  const toast = useToast();

  return (
    <GradientProvider>
      <Image
        source={require("../../assets/profile_back.png")}
        alt="Background shapes"
        top="-10px"
        size="xl"
        height="85%"
        width="110%"
        position="absolute"
      />
      <VStack
        h={"full"}
        w={"full"}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Box>
          <Center>
            <Image
              source={require("../../assets/mock_profile.jpeg")}
              alt="Usher icon"
              size="xl"
              width="130px"
              height="130px"
              borderRadius="100px"
              mt="60px"
            />
            <Text mt="20px" mb="-10px" bold color="#1d1d1b" fontSize="2xl">
              {user?.first_name} {user?.last_name}
            </Text>
          </Center>
        </Box>
        <Box alignItems="center">
          <Row justifyContent="space-evenly">
            <Center>
              <Text
                color="primary.600"
                fontWeight="600"
                mx="25px"
                fontSize="lg"
              >
                Tickets
              </Text>
              <Text fontWeight={900} color="#1d1d1b" fontSize="md">
                {user?.tickets.length}
              </Text>
            </Center>
            <Divider
              thickness="2"
              mx="2"
              mr="5"
              h="8"
              my="3"
              bg="primary.600"
              orientation="vertical"
            />
            <Center justifyContent="space-evenly">
              <Text
                color="primary.600"
                fontWeight="600"
                mx="10px"
                fontSize="lg"
              >
                Favorites
              </Text>
              <Text fontWeight={900} color="#1d1d1b" fontSize="md">
                {user?.favorite_ids.length}
              </Text>
            </Center>
          </Row>
        </Box>
        <Row>
          <Button
            mx="10px"
            bgColor="primary.700"
            width="100px"
            height="80px"
            borderRadius="15px"
            onPress={() => navigation.navigate("Tickets")}
          >
            <Icon
              size={10}
              ml="5px"
              color={"light.100"}
              as={<Ionicons name={"calendar-outline"} />}
            />
            Tickets
          </Button>
          <Button
            mx="10px"
            bgColor="dark.400"
            width="100px"
            height="80px"
            borderRadius="15px"
            onPress={() => navigation.navigate("Favorites")}
          >
            <Icon
              size={10}
              ml="7px"
              color={"light.100"}
              as={<Ionicons name={"heart-outline"} />}
            />
            Favorites
          </Button>
        </Row>
        <Center>
          <Row alignItems="center" space={4}>
            <Text color="white" fontWeight={600} fontSize="lg">
              Notifications
            </Text>
            <Switch size="sm" />
          </Row>
          ;
          <Button
            colorScheme="secondary"
            variant="link"
            size="lg"
            onPress={async () => {
              try {
                populateUser(null);
                await AsyncStorage.clear();
              } catch (e) {
                toast.show({
                  title: "Something went wrong",
                  status: "error",
                  description: "Failed to log out with error: " + e,
                });
              }
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
