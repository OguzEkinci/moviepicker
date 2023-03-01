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
import {FlatList} from 'react-native-gesture-handler';
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
        <FlatList
          data={favList}
          contentContainerStyle={{paddingBottom: height * 0.09}}
          onEndReachedThreshold={0.5}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <View style={{margin: 5}} key={index}>
              <DiscoverCard navigation={navigation} item={item} />
            </View>
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Fav;
