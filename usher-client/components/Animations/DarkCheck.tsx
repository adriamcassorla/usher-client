import { Jost_400Regular } from "@expo-google-fonts/jost";
import * as React from "react";
import { StyleSheet, View } from "react-native";
const LottieView = require("lottie-react-native");

export default class ConfirmationGif extends React.Component {
  componentDidMount() {
    this.animation.play(0, 55);
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          loop={false}
          ref={(animation) => {
            this.animation = animation;
          }}
          style={{
            paddingTop: 100,
            width: 600,
            height: 600,
          }}
          source={require("../../assets/dark-fancy-check.json")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    marginTop: -400,
  },
});
