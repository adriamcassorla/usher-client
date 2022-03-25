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
            width: 280,
            height: 280,
          }}
          source={require("../../assets/confirmation_lottie.json")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    marginTop: 120,
  },
});
