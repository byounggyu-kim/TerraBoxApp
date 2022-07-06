import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const RegionList = ({
  item,
  selectedRegion,
  setSelectedRegion,
  setSelectedTheater,
}) => {
  const buttonActivation = obj => {
    setSelectedRegion(obj);
    setSelectedTheater();
  };

  const userSelection = selectedRegion === item;

  return (
    <TouchableOpacity
      style={[
        styles.singleregion,
        {backgroundColor: userSelection ? 'gray' : 'white'},
      ]}
      onPress={() => buttonActivation(item)}>
      <Text
        style={[styles.regionName, {color: userSelection ? 'white' : 'black'}]}>
        {item.region_name}
      </Text>
    </TouchableOpacity>
  );
};

export default RegionList;

const styles = StyleSheet.create({
  singleregion: {
    padding: 15,
    borderRightWidth: 0.5,
  },

  regionName: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 15,
  },
});
