import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const RegionList = ({item, selectedTheater, setSelectedTheater}) => {
  const buttonActivation = obj => {
    setSelectedTheater(obj);
  };

  const userSelection = selectedTheater === item;

  return (
    <TouchableOpacity
      style={[
        styles.singleTheater,
        {backgroundColor: userSelection ? 'gray' : 'white'},
      ]}
      onPress={() => buttonActivation(item)}>
      <Text
        style={[
          styles.theaterName,
          {color: userSelection ? 'white' : 'black'},
        ]}>
        {item.theater_name}
      </Text>
    </TouchableOpacity>
  );
};

export default RegionList;

const styles = StyleSheet.create({
  singleTheater: {
    padding: 15,
  },

  theaterName: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 15,
  },
});
