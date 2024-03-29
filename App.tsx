import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './src/Detail/Detail';
import BackButton from './src/Components/BackButton';
import Default from './src/Default/Default';
import TabNav from './TabNav';
import RegionBooking from './src/Booking/RegionBooking';
import MovieBooking from './src/Booking/MovieBooking';
import TimeBooking from './src/Booking/TimeBooking';

const Stack = createNativeStackNavigator();

export type StackParamList = {
  Default: undefined;
  TabNav: undefined;
  Detail: undefined;
  MovieBooking: undefined;
  RegionBooking: undefined;
  TimeBooking: undefined;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Default"
          component={Default}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={{gestureEnabled: false, headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: '상세',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="MovieBooking"
          component={MovieBooking}
          options={{
            title: '예매',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="RegionBooking"
          component={RegionBooking}
          options={{
            title: '예매',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="TimeBooking"
          component={TimeBooking}
          options={{
            title: '예매',
            headerLeft: () => <BackButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
