import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Mypage from './src/Mypage/Mypage';
import Main from './src/Main/Main';
import MovieBooking from './src/Booking/MovieBooking';
import HomeIcon from './assets/home.jpeg';
import CalenderIcon from './assets/calender.jpeg';
import MyPageIcon from './assets/mypage.png';

export type TabNavParamList = {
  Main: undefined;
  Booking: undefined;
  Mypage: undefined;
};

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
        name="Main"
        component={Main}
        options={{
          title: '메인',
          tabBarIcon: () => (
            <Image style={{width: 35}} resizeMode="contain" source={HomeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={MovieBooking}
        options={{
          title: '예매',
          tabBarIcon: () => (
            <Image
              style={{width: 35}}
              resizeMode="contain"
              source={CalenderIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          title: '마이페이지',
          tabBarIcon: () => (
            <Image
              style={{width: 25}}
              resizeMode="contain"
              source={MyPageIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  footerIcon: {
    width: 35,
  },
});
