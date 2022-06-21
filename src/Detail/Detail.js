import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Detail = () => {
  const navigation = useNavigation();
  const goToMain = () => {
    // navigation.push('Main');
    navigation.navigate('Main');
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => goToMain()}>
        <Text>Return to Main</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;

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
