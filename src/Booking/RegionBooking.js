import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import RegionList from '../Components/Booking/RegionList';
import TheaterList from '../Components/Booking/TheaterList';
import {useNavigation} from '@react-navigation/native';

const RegionBooking = ({route}) => {
  const selectedMovieData = route.params.selectedMovie;
  const navigation = useNavigation();
  const [regionLists, setRegionLists] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState();
  const [selectedTheater, setSelectedTheater] = useState();

  useEffect(() => {
    fetch('http://15.164.163.31:8000/Reserve/region')
      .then(res => res.json())
      .then(data => setRegionLists(data.regions));
  }, []);

  const renderItemRegion = ({item}) => (
    <RegionList
      item={item}
      selectedRegion={selectedRegion}
      setSelectedRegion={setSelectedRegion}
      setSelectedTheater={setSelectedTheater}
    />
  );

  const renderItemTheater = ({item}) => (
    <TheaterList
      item={item}
      selectedTheater={selectedTheater}
      setSelectedTheater={setSelectedTheater}
    />
  );

  const goToTime = () => {
    setSelectedRegion();
    navigation.navigate('TimeBooking', {
      selectedMovieData: selectedMovieData,
      selectedTheater: selectedTheater,
    });
  };

  return (
    <View style={styles.white}>
      <Text style={styles.movieName}>
        내가 고른 영화: {selectedMovieData.movie_name}
      </Text>
      <Text style={styles.movieName}>영화관 목록</Text>
      <View style={styles.layout}>
        <View style={styles.tableRegion}>
          <FlatList
            data={regionLists}
            renderItem={renderItemRegion}
            keyExtractor={item => item.region_id}
          />
        </View>
        <View style={styles.tableTheater}>
          <FlatList
            data={selectedRegion?.theaters}
            renderItem={renderItemTheater}
            keyExtractor={item => item.theater_id}
          />
        </View>
      </View>
      {selectedTheater && (
        <TouchableOpacity style={styles.button} onPress={() => goToTime()}>
          <Text style={styles.buttonText}>영화관 선택하기</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RegionBooking;

const styles = StyleSheet.create({
  white: {
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
  },

  movieName: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600',
  },

  layout: {
    flexDirection: 'row',
  },

  tableRegion: {
    marginTop: 50,
    borderWidth: 0.5,
    width: '45%',
    height: '100%',
  },

  tableTheater: {
    marginTop: 50,
    borderWidth: 0.5,
    borderLeftWidth: 0,
    width: '45%',
    height: '100%',
  },

  button: {
    width: '70%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#27402D',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
