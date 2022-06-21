import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();

  const goToDetail = () => {
    navigation.navigate('Detail');
    // navigation.push('Detail');
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => goToDetail()}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 40,
    marginTop: 50,
    backgroundColor: 'ivory',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
