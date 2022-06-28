import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Item = ({item}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate('Detail', {id: item.id, poster: item.stillcut_url});
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.button} onPress={() => goToDetail()}>
        <Image style={styles.poster} source={{uri: item.stillcut_url}} />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    marginBottom: 80,
  },

  button: {
    alignItems: 'center',
  },

  poster: {
    width: 300,
    height: 400,
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});
