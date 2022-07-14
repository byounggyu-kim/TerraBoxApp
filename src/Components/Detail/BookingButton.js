import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';

const BookingButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.font}>예매</Text>
    </TouchableOpacity>
  );
};

export default BookingButton;

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 55,
    backgroundColor: '#27402D',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 10,
  },

  font: {
    fontSize: 22,
    fontWeight: '600',
    color: 'whitesmoke',
  },
});
