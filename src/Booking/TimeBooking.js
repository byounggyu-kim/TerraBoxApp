import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const TimeBooking = ({route}) => {
  const movieId = route.params?.selectedMovieData.movie_id;
  const theaterId = route.params?.selectedTheater.theater_id;

  useEffect(() => {
    fetch(
      `http://10.58.0.92:8000/Reserve/movietheater?movie_id=${movieId}&theater_id=${theaterId}`,
    )
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

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
