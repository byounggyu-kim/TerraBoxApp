import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import TerraBoxIcon from '../../assets/TerraBoxLogoNewWhite.png';
import {useNavigation} from '@react-navigation/native';

const Default = () => {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate('TabNav');
  };

  return (
    <View style={styles.white}>
      <Image source={TerraBoxIcon} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={() => goToLogin()}>
        <Text style={styles.buttonText}>테라박스로 입장하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Default;

const styles = StyleSheet.create({
  white: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
  },

  logo: {
    width: 500,
    height: 130,
    marginTop: 200,
    marginBottom: 150,
    marginLeft: 15,
  },

  button: {
    width: '90%',
    height: 70,
    backgroundColor: '#27402D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'whitesmoke',
  },
});
