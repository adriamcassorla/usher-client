import React from 'react';
import {
  Text,
  Center,
  NativeBaseProvider,
  Button,
} from 'native-base';

import theme from './styles/theme';
import UnauthorizedHome from './content/pages/UnauthorizedHome';
import HomeBottomTabsNavigator from './content/navigations/HomeBottomTabsNavigator';


export default function App() {
  const authorized = true;

  return (
     <NativeBaseProvider theme={theme}>
       { authorized ?
         <HomeBottomTabsNavigator></HomeBottomTabsNavigator> :
         <UnauthorizedHome></UnauthorizedHome>
       }
      {/*
      TODO: MAIN SKELETON
      - Conditional render
        = Login
        = Stack navigator
          + Main tab navigation:
            * Search
            * Home
            * Map
            * Profile stack:
              - Profile
              - Favorites
              - Tickets
          + Event page
      */}

     </NativeBaseProvider>
  );
}
