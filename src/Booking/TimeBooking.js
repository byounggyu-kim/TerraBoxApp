import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TimeBooking = ({route}) => {
  const movieData = route.params.selectedMovieData;
  const theaterData = route.params.selectedTheater;
  console.log(movieData);
  console.log(theaterData);
  return <View style={styles.white}>{/* <Text>TimeBooking</Text> */}</View>;
};

export default TimeBooking;

const styles = StyleSheet.create({
  white: {
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
  },
});
