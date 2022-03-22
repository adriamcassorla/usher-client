import { Input, Icon, View, useSafeArea } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

type Props = {
  events: EventType[] | null;
  setResults: React.Dispatch<React.SetStateAction<EventType[] | null>>;
};

const SearchBar = ({ events, setResults }: Props) => {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
  });

  const handleChange = (input: string) => {
    const regex = new RegExp(`${input}`, 'i');
    const res = events?.filter(
      (event) =>
        regex.test(event.name) || regex.test(event.venue.name)
    );
    setResults(res || []);
  };

  return (
    <View pb={2} {...safeAreaProps}>
      <Input
        onChangeText={handleChange}
        alignSelf={'center'}
        mt={1}
        placeholder="Search an event"
        placeholderTextColor="light.900"
        variant="filled"
        width="90%"
        borderRadius="10"
        py="3"
        borderWidth="0"
        bg={'dark.900'}
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="dark.500"
            as={<Ionicons name="ios-search" />}
          />
        }
      />
    </View>
  );
};

export default SearchBar;
