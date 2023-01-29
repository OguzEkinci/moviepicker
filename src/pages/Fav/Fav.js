import {isArray} from 'lodash';
import React, {useState} from 'react';
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
import I18n from '../../assets/util/lang/_i18n';
const {width, height} = Dimensions.get('screen');

const Fav = ({navigation}) => {
  const favList = useSelector(state => state.favList);
  console.log(favList);
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
            <Text style={styles.headerText}>{I18n.t('saved')}</Text>
            <Text
              style={[
                styles.headerText,
                {
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
              ]}>
              {isArray(favList) ? favList.length : 0} /100
            </Text>
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
