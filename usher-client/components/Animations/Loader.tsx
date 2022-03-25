import { Center } from "native-base";
import * as React from "react";
import { StyleSheet, View } from "react-native";
const LottieView = require("lottie-react-native");

export class Loader extends React.Component {
  componentDidMount() {
    this.animation.play(0, 55);
  }

  render() {
    return (
      <Center w={"full"} h={"full"} bg={"dark.50"}>
        <LottieView
          loop={true}
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            width: "70%",
            height: 150,
          }}
          source={require("../../assets/loaderDots.json")}
        />
      </Center>
    );
  }
}
