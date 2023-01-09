import React from 'react';
import {View, TouchableWithoutFeedback, Image, Text} from 'react-native';
import {AirbnbRating, Rating} from 'react-native-ratings';

import {styles} from './DiscoverCard.style';
const DiscoverCard = ({item, key, discover, navigation}) => {
  return (
    <View key={key} style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Details', item);
        }}>
        <View style={styles.card}>
          <View
            style={
              discover
                ? {
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#323232',
                    padding: 5,
                    marginTop: 5,
                    height: 200,
                    borderRadius: 15,
                  }
                : {
                    backgroundColor: '#323232',
                    width: '35%',
                    height: 175,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
            }>
            <Image
              resizeMode="stretch"
              style={{
                width: discover ? 130 : 110,
                height: discover ? 180 : 160,
                borderRadius: 8,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
              }}
            />
          </View>
          {!discover && (
            <View
              style={{
                backgroundColor: '#323232',
                borderBottomRightRadius: 75,
                width: '65%',
                height: 125,
                paddingTop: 20,
                padding: 12,
              }}>
              <Text
                numberOfLines={1}
                style={{color: '#c7c7c7', fontWeight: 'bold', fontSize: 14}}>
                {item?.title}
              </Text>
              <Text style={{color: '#ddd', fontSize: 12, marginTop: 2}}>
                {item?.release_date}
              </Text>
              <AirbnbRating
                count={10}
                reviews={['']}
                defaultRating={item.vote_average}
                showRating={false}
                size={15}
                ratingContainerStyle={{
                  marginTop: 12,
                }}
                isDisabled={true}
                selectedColor={'#a0587e'}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/star.png')}
                  resizeMode={'center'}
                  style={{width: 10, height: 10, tintColor: '#ddd'}}
                />
                <Text
                  style={{
                    color: '#ddd',
                    fontSize: 12,
                    marginTop: 2,
                    marginLeft: 3,
                  }}>
                  {item?.vote_count}
                </Text>
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export {DiscoverCard};
