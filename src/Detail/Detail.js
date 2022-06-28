import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState, useTransition} from 'react';
import {useNavigation} from '@react-navigation/native';

const Detail = ({route}) => {
  const navigation = useNavigation();
  const [movieData, setMovieData] = useState({});
  const [isInfo, setIsInfo] = useState(true);
  const [shortInfo, setShortInfo] = useState(true);

  // 예약으로 넘어갈 때 필요함
  // const goToMain = () => {
  //   // navigation.push('Main');
  //   navigation.navigate('Main');
  // };

  useEffect(() => {
    fetch(`http://15.164.163.31:8000/movies/${route.params.id}`)
      .then(res => res.json())
      .then(data => setMovieData(data.result));
  }, []);

  const stillcutList = movieData.stillcut_urls;
  const splittedDescription = movieData.description?.split('\\n');
  const shortDescription = splittedDescription && splittedDescription[0];
  const fullDescription = splittedDescription?.join();

  return (
    <ScrollView>
      {/* <TouchableOpacity style={styles.button} onPress={() => goToMain()}>
      </TouchableOpacity> */}
      <Image source={{uri: route.params.poster}} style={styles.mainImg} />
      <Text style={styles.mainTitle}>{movieData.name}</Text>
      <Text style={styles.engTitle}>{movieData.eng_name}</Text>
      <View style={styles.tabStyle}>
        <Pressable
          style={{...styles.menuTab, borderBottomWidth: isInfo ? 3 : 0.5}}
          onPress={() => setIsInfo(true)}>
          <Text style={styles.tabName}>영화 상세 정보</Text>
        </Pressable>
        <Pressable
          style={{...styles.menuTab, borderBottomWidth: !isInfo ? 3 : 0.5}}
          onPress={() => setIsInfo(false)}>
          <Text style={styles.tabName}>관람평</Text>
        </Pressable>
      </View>
      {/*컴포넌트*/}
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
    </ScrollView>
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

  mainImg: {
    width: '100%',
    height: 500,
    marginBottom: 30,
  },

  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
    marginBottom: 10,
    color: '#111111',
  },

  engTitle: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },

  tabStyle: {
    width: '100%',
    flexDirection: 'row',
  },

  menuTab: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: '#d2d2d2',
  },

  tabName: {
    fontSize: 15,
    fontWeight: '600',
  },

  descriptionView: {
    marginLeft: 15,
  },

  descript: {
    fontSize: 14.5,
    fontWeight: '600',
    marginBottom: 30,
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
