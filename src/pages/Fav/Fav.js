import {isArray} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {DiscoverCard} from '../../components/DiscoverCard/DiscoverCard';
import styles from './Fav.style';
const {width, height} = Dimensions.get('screen');

const Fav = () => {
  const favList = useSelector(state => state.favList);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={{
          flex: 1,
        }}
        colors={['#621ef4', '#b291fb']}>
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>SAVED</Text>
          </View>
          {isArray(favList) &&
            favList?.map((item, index) => (
              <View style={{margin: 5}}>
                <DiscoverCard item={item} key={index} />
              </View>
            ))}
          <View
            style={{
              height: height * 0.14,
              width: width,
            }}
          />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};
export {Fav};
