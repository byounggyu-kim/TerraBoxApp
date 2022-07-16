import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const TimeBooking = ({route}) => {
  const userMovie = route.params?.selectedMovieData;
  const userTheater = route.params?.selectedTheater;

  useEffect(() => {
    fetch(
      `http://15.164.163.31:8000/Reserve/movietheater?movie_id=${userMovie.movie_id}&theater_id=${userTheater.theater_id}`,
    )
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <View style={styles.white}>
      <Text style={styles.timeSelect}>
        테라박스 {userTheater.theater_name}의 상영시간을 선택하세요
      </Text>
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
