import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Back from '../../assets/leftArrow.png';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <Image source={Back} style={styles.button} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    width: 15,
    height: 23,
  },
});
