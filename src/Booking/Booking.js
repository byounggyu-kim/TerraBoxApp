import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import MovieList from '../Components/Booking/MovieList';

const Booking = () => {
  const [movieNames, setMovieNames] = useState([]);
  const [regionLists, setRegionLists] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [btnActive, setBtnActive] = useState(true);

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

  useEffect(() => {
    if (selectedMovie !== {} && selectedMovie) {
      setBtnActive(false);
    }
  }, [selectedMovie]);

  const renderItem = ({item}) => (
    <MovieList
      item={item}
      selectedMovie={selectedMovie}
      setSelectedMovie={setSelectedMovie}
    />
  );

  return (
    <View style={styles.white}>
      <Text style={styles.movieSelect}>관람하실 영화를 선택하세요</Text>
      <View style={styles.table}>
        <FlatList
          data={movieNames}
          renderItem={renderItem}
          keyExtractor={item => item.movie_id}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, {opacity: !btnActive ? '0.3' : '1'}]}
        disabled={btnActive}>
        <Text>선택하기</Text>
      </TouchableOpacity>
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

  movieSelect: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 50,
  },

  table: {
    marginTop: 50,
    borderWidth: 0.5,
    // borderRadius: 20,
    width: '90%',
    height: '60%',
  },

  button: {
    width: '30%',
    height: '20%',
    backgroundColor: 'red',
  },
});
