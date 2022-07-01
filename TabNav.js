import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/Login/Login';
import Main from './src/Main/Main';
import HomeIcon from './assets/home.jpeg';
import SettingIcon from './assets/setting.jpeg';

const TabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          title: '메인',
          tabBarIcon: () => (
            <Image style={{width: 30}} resizeMode="contain" source={HomeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          title: '설정',
          tabBarIcon: () => (
            <Image
              style={{width: 50}}
              resizeMode="contain"
              source={SettingIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
