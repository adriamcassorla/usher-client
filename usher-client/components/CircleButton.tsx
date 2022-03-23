import * as React from "react";
import { Button, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  bgCol: string;
  pressedCol: string;
  size?: number;
  icon: string;
  onPress: () => void;
  isDisabled?: boolean | true;
};

const CircleButton = ({
  bgCol,
  pressedCol,
  size,
  icon,
  onPress,
  isDisabled,
}: Props) => {
  return (
    <Button
      pl={4}
      pt={3}
      borderRadius="full"
      w={size || 12}
      h={size || 12}
      variant={"unstyled"}
      bg={bgCol}
      _pressed={{ bg: pressedCol }}
      onPress={onPress}
      isDisabled={isDisabled}
    >
      <Icon as={Ionicons} name={icon} color={"light.50"} size={size || 12} />
    </Button>
  );
};

export default CircleButton;
