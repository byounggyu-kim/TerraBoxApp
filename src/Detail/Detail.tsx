import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DetailedInfo from '../Components/Detail/DetailedInfo';
import MovieComment from '../Components/Detail/MovieComment';
import BookingButton from '../Components/Detail/BookingButton';

type detailedProps = {
  id: number;
  name: string;
  eng_name: string;
};

const Detail = ({route}: detailedProps) => {
  const [movieData, setMovieData] = useState({});
  const [isInfo, setIsInfo] = useState(true);
  const [shortInfo, setShortInfo] = useState(true);

  useEffect(() => {
    fetch(`http://15.164.163.31:8000/movies/${route.params.id}`)
      .then(res => res.json())
      .then(data => setMovieData(data.result));
  }, [route.params.id]);

  return (
    <>
      <ScrollView>
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
        {isInfo ? (
          <DetailedInfo
            shortInfo={shortInfo}
            setShortInfo={setShortInfo}
            movieData={movieData}
          />
        ) : (
          <MovieComment movieData={movieData} movieId={route.params.id} />
        )}
      </ScrollView>
      <BookingButton selectedId={movieData.id} />
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
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
});
