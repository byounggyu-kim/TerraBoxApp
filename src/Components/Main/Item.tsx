import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../../App';
import {StackNavigationProp} from '@react-navigation/stack';

type DetailScreenProp = StackNavigationProp<StackParamList, 'Detail'>;

const Item = ({item}: any) => {
  const navigation = useNavigation<DetailScreenProp>();
  const goToDetail = (): void => {
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
    marginLeft: 20,
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
