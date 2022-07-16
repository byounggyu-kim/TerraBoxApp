import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import MovieList from '../Components/Booking/MovieList';
import {useNavigation} from '@react-navigation/native';

const MovieBooking = ({route}) => {
  const navigation = useNavigation();
  const [movieNames, setMovieNames] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(
    {
      movie_id: route.params?.id,
    } && route.params,
  );

  useEffect(() => {
    fetch('http://15.164.163.31:8000/Reserve/movie')
      .then(res => res.json())
      .then(data => setMovieNames(data.movies));
  }, []);

  const renderItem = ({item}) => (
    <MovieList
      item={item}
      selectedMovie={selectedMovie}
      setSelectedMovie={setSelectedMovie}
    />
  );

  const goToRegion = () => {
    setSelectedMovie();
    navigation.navigate('RegionBooking', {selectedMovie: selectedMovie});
  };

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
      {selectedMovie && (
        <TouchableOpacity style={styles.button} onPress={() => goToRegion()}>
          <Text style={styles.buttonText}>영화 선택하기</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MovieBooking;

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
    width: '90%',
    height: '60%',
  },

  button: {
    width: '70%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#27402D',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
