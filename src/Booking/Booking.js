import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import MovieList from '../Components/Booking/MovieList';

const Booking = () => {
  const [movieNames, setMovieNames] = useState([]);
  const [regionLists, setRegionLists] = useState([]);

  useEffect(() => {
    fetch('http://15.164.163.31:8000/Reserve/movie')
      .then(res => res.json())
      .then(data => setMovieNames(data.movies));
  }, []);

  useEffect(() => {
    fetch('http://15.164.163.31:8000/Reserve/region')
      .then(res => res.json())
      .then(data => setRegionLists(data.regions));
  }, []);

  const renderItem = ({item}) => <MovieList item={item} />;

  return (
    <View style={styles.white}>
      <View style={styles.table}>
        <FlatList
          data={movieNames}
          renderItem={renderItem}
          keyExtractor={item => item.movie_id}
        />
      </View>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  white: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
  },

  table: {
    marginTop: 100,
    borderWidth: 1,
    width: '90%',
    height: '80%',
  },
});
