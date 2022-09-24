import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const BookingButton = ({selectedId}: number) => {
  const navigation = useNavigation();
  const goToBooking = () => {
    navigation.navigate('MovieBooking', {id: selectedId});
  };

  return (
    <TouchableOpacity style={styles.button} onPress={() => goToBooking()}>
      <Text style={styles.font}>예매</Text>
    </TouchableOpacity>
  );
};

export default BookingButton;

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 55,
    borderWidth: 1,
    borderColor: '#27402D',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 10,
  },

  font: {
    fontSize: 22,
    fontWeight: '600',
    color: '#27402D',
  },
});
