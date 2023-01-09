import {isArray} from 'lodash';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {useSelector} from 'react-redux';
import {DiscoverCard} from '../../components/DiscoverCard/DiscoverCard';
import styles from './Fav.style';
const {width, height} = Dimensions.get('screen');

const Fav = ({navigation}) => {
  const favList = useSelector(state => state.favList);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require('../../assets/background.jpg')}>
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'column',
          }}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>SAVED</Text>
          </View>
          {isArray(favList) &&
            favList?.map((item, index) => (
              <View style={{margin: 5}} key={index}>
                <DiscoverCard navigation={navigation} item={item} />
              </View>
            ))}
          <View
            style={{
              height: height * 0.14,
              width: width,
            }}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Fav;
