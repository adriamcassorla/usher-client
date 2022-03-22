import * as React from "react";
import { Box, Pressable, useToken, Center, Flex } from "native-base";
import { Animated } from "react-native";

type Props = {
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
};

const EventTabHeader = ({ tabIndex, setTabIndex }: Props) => {
  const routes = ["Event", "Venue"];
  const [dark200, light300] = useToken("colors", ["dark.200", "light.300"]);

  return (
    <Flex w={"full"} alignItems={"center"}>
      <Center flexDirection="row" bg={"light.50"} w={"60%"}>
        {routes.map((route, i) => {
          const color = tabIndex === i ? dark200 : light300;
          const borderColor = tabIndex === i ? "primary.400" : "light.200";
          return (
            <Box
              borderBottomWidth="4"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              pb="2"
              key={i}
            >
              <Pressable
                onPress={() => {
                  setTabIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                    fontWeight: tabIndex === i ? "700" : "300",
                    fontSize: 18,
                  }}
                >
                  {route}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Center>
    </Flex>
  );
};

export default EventTabHeader;
