import {FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Item from '../Components/Main/Item';

const Main = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch('http://15.164.163.31:8000/movies')
      .then(res => res.json())
      .then(data => setMovieList(data.result));
  }, []);

  const navigation = useNavigation();

  const renderItem = ({item}) => <Item item={item} />;
  return (
    <FlatList
      data={movieList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default Main;
