import { Button, Text} from 'native-base';
import * as React from 'react';

type Props = {
  dispatch: React.Dispatch<any>,
  filter: string
}

const FilterButton = ({dispatch, filter}: Props) => {
  const [isActive, setIsActive] = React.useState(false)

  const handlePress = () => {
    // Visual feedback
    setIsActive(!isActive);
    console.log('new state is: ', isActive);
    // TODO: dispatch reducer to update

  }

  return (
    <Button
      bgColor={isActive? 'primary.600' : 'light.300' }
      // borderColor={'white' }
      // borderWidth={1}
      ml={3}
      borderRadius={20}
      onPress={handlePress}
    >
      <Text
      fontWeight='medium'
      color={isActive? 'white' : 'dark.50' }>
        {filter}
        </Text>
    </Button>
  );
};

export default FilterButton;
