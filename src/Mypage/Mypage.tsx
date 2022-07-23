import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TabNavParamList} from '../../TabNav';
import {StackNavigationProp} from '@react-navigation/stack';
import HomeIcon from '../../assets/home.jpeg';
import CalenderIcon from '../../assets/calender.jpeg';

type MyPageStackProp = StackNavigationProp<TabNavParamList, 'Mypage'>;

const Mypage = () => {
  const navigation = useNavigation<MyPageStackProp>();
  const listArray = [
    {id: 1, content: '영화', image: HomeIcon},
    {id: 2, content: '예매', image: CalenderIcon},
  ];

  const navi = (id: number) => {
    switch (id) {
      case 1:
        navigation.navigate('Main');
        break;
      case 2:
        navigation.navigate('Booking');
    }
  };

  return (
    <View style={styles.white}>
      <View style={styles.login}>
        <TouchableOpacity style={styles.loginButton}>
          <Text>카카오톡 로그인</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.layout}>
        {listArray.map(el => (
          <TouchableOpacity
            key={el.id}
            style={styles.button}
            onPress={() => navi(el.id)}>
            <Image source={el.image} style={styles.iconImage} />
            <Text style={styles.buttonText}>{el.content}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Mypage;

const styles = StyleSheet.create({
  white: {
    backgroundColor: 'white',
    height: '100%',
  },

  login: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },

  loginButton: {
    width: 250,
    alignItems: 'center',
    borderWidth: 0.5,
    padding: 20,
  },

  layout: {
    flexDirection: 'row',
    marginLeft: 15,
  },

  iconImage: {
    width: 50,
    height: 50,
  },

  button: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 15,
    borderWidth: 0.5,
    borderColor: '#d2d2d2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 17,
    marginTop: 10,
  },
});
