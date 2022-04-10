import { Button, Text } from "native-base";
import * as React from "react";

type Props = {
  filters: any;
  setFilters: any;
  filter: string;
};

const FilterButton = ({ setFilters, filters, filter }: Props) => {
  const [isActive, setIsActive] = React.useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
  };

  React.useEffect(() => {
    setFilters(
      isActive
        ? [...filters, filter]
        : filters.filter((f: string) => f != filter)
    );
  }, [isActive]);

  return (
    <Button
      bgColor={isActive ? "primary.600" : "light.300"}
      ml={3}
      borderRadius={20}
      onPress={handlePress}
    >
      <Text fontWeight="medium" color={isActive ? "white" : "dark.200"}>
        {filter}
      </Text>
    </Button>
  );
};

export default FilterButton;
