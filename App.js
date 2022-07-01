import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/Main/Main.js';
import Detail from './src/Detail/Detail.js';
import BackButton from './src/Components/BackButton.js';
import NoneButton from './src/Components/NoneButton.js';
import Login from './src/Login/Login.js';
import Default from './src/Login/Default.js';
import TabNav from './TabNav.js';

const Stack = createNativeStackNavigator();

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
          name="Login"
          component={Login}
          options={{
            title: '로그인',
            headerLeft: () => <BackButton />,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: '상세',
            headerLeft: () => <BackButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
