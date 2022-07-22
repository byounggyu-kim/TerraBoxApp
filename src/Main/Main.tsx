import {FlatList, View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import Item from '../Components/Main/Item';

const Main = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch('http://15.164.163.31:8000/movies')
      .then(res => res.json())
      .then(data => setMovieList(data.result));
  }, []);

  const renderItem = ({item}: any) => <Item item={item} />;
  return (
    <View style={styles.white}>
      <View style={styles.movies}>
        <FlatList
          data={movieList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  white: {
    backgroundColor: 'white',
    height: '100%',
  },

  movies: {
    marginTop: 30,
    backgroundColor: 'yellow',
    padding: 15,
  },
});
