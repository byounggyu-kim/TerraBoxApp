import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MovieList = ({item, selectedMovie, setSelectedMovie, setBtnActive}) => {
  const buttonActivation = obj => {
    setSelectedMovie(obj);
  };

  const yes = selectedMovie === item;

  return (
    <TouchableOpacity
      style={[styles.singleMovie, {backgroundColor: yes ? 'gray' : 'white'}]}
      onPress={() => buttonActivation(item)}>
      <Image source={{uri: item.age_grade}} style={styles.age} />
      <Text style={[styles.movieName, {color: yes ? 'white' : 'black'}]}>
        {item.movie_name}
      </Text>
    </TouchableOpacity>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  singleMovie: {
    flexDirection: 'row',
    padding: 20,
  },

  age: {
    width: 25,
    height: 27,
  },

  movieName: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 15,
  },
});
