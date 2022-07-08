import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TimeBooking = ({route}) => {
  const movieData = route.params.selectedMovieData;
  const theaterData = route.params.selectedTheater;
  console.log(movieData.movie_id);
  console.log(theaterData.theater.id);
  return (
    <View style={styles.white}>
      <Text style={styles.timeSelect}>상영시간을 선택하세요</Text>
    </View>
  );
};

export default TimeBooking;

const styles = StyleSheet.create({
  white: {
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
  },

  timeSelect: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 50,
  },
});
