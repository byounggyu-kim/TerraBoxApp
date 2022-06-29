import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const DetailedInfo = ({shortInfo, setShortInfo, movieData}) => {
  const stillcutList = movieData.stillcut_urls;
  const splittedDescription = movieData.description?.split('\\n');
  const shortDescription = splittedDescription && splittedDescription[0];
  const fullDescription = splittedDescription?.join();
  return (
    <>
      <View style={styles.descriptionView}>
        <Text style={styles.descript}>
          {shortInfo ? shortDescription : fullDescription}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShortInfo(prev => !prev)}>
          <Text>{shortInfo ? '더보기' : '접기'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        {stillcutList?.map(url => (
          <Image key={url} source={{uri: url}} style={styles.images} />
        ))}
      </View>
    </>
  );
};

export default DetailedInfo;

const styles = StyleSheet.create({
  descriptionView: {
    marginLeft: 15,
    marginRight: 15,
  },

  descript: {
    fontSize: 14.5,
    fontWeight: '600',
    marginBottom: 10,
  },

  button: {
    width: '100%',
    height: 30,
    backgroundColor: 'ivory',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },

  imageContainer: {
    flexDirection: 'row',
  },

  images: {
    width: '50%',
    height: 300,
    marginLeft: 10,
  },
});
