import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const DetailedInfo = ({shortInfo, setShortInfo, movieData}: any) => {
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
      <Text style={styles.stillText}>스틸컷 이미지</Text>
      <ScrollView style={styles.imageContainer} horizontal={true}>
        {stillcutList?.map(url => (
          <Image key={url} source={{uri: url}} style={styles.images} />
        ))}
      </ScrollView>
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
    marginRight: 10,
  },

  images: {
    width: 200,
    height: 300,
    marginLeft: 10,
  },

  stillText: {
    marginLeft: 10,
    marginBottom: 20,
    fontSize: 21,
    fontWeight: '600',
  },
});
