import {isArray} from 'lodash';
import React, {useEffect, useReducer, useRef, useState} from 'react';
import {View, Image, Dimensions, TouchableOpacity, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {getVideo} from '../../services/GetVideo/GetVideo';
import {styles} from './Details.style';
import VideoFrame from '../../components/VideoFrame/VideoFrame';
import {genresWithId} from '../../data/genresData';
import {ScrollView} from 'react-native-gesture-handler';
import {AirbnbRating} from 'react-native-ratings';
import FavButton from '../../components/Button/FavButton';
const {width, height} = Dimensions.get('screen');

const Details = props => {
  const movieInfo = props.route.params;
  const scroll = useRef(new Animated.Value(0)).current;
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [videoKey, setVideoKey] = useState('');
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      watchVideo: false,
    },
  );
  useEffect(() => {
    getVideo(movieInfo?.id)
      .then(res => {
        setVideoKey(res.data?.results[0]?.key);
      })
      .catch(() => {
        setErrorModalVisible(true);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{position: 'relative'}}>
        <View
          style={{
            position: 'absolute',
            width: width,
            height: 50,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: 15,
            paddingLeft: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              setState({watchVideo: false});
              props.navigation.goBack();
            }}
            style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/back-button.png')}
              resizeMode="center"
              style={{width: 40, height: 40, tintColor: '#c7c7c7'}}
            />
          </TouchableOpacity>
          <View
            style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FavButton movieObject={movieInfo} />
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: width,
            height: 50,
            top: height / 3.6,
          }}>
          {videoKey ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                width: 100,
                height: 50,
                backgroundColor: '#323232',
              }}>
              <TouchableOpacity
                onPress={() => setState({watchVideo: true})}
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/play.png')}
                  resizeMode="center"
                  style={{width: 40, height: 40, tintColor: '#00f9f9'}}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View />
          )}
        </View>

        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieInfo?.backdrop_path}`,
          }}
          resizeMode="cover"
          style={{
            width: width,
            height: height / 3,
            opacity: 0.5,
            zIndex: -1,
          }}
        />
      </View>
      <ScrollView style={{backgroundColor: '#323232', paddingTop: 20}}>
        {state.watchVideo && <VideoFrame videoKey={videoKey} />}

        {movieInfo?.original_title ? (
          <Text style={styles.mainTitle}>{movieInfo?.original_title}</Text>
        ) : (
          <Text style={styles.mainTitle}>No Title</Text>
        )}

        {movieInfo?.title ? (
          <Text style={styles.subTitle}>{movieInfo?.title}</Text>
        ) : (
          <Text style={styles.subTitle}>No Title</Text>
        )}
        <View style={styles.yearAndTimeHeaderInside}>
          <Image
            style={styles.icon}
            resizeMode={'center'}
            source={
              movieInfo?.release_date
                ? require('../../assets/calendar.png')
                : require('../../assets/calendar.png')
            }
          />
          <Text style={{color: '#ddd'}}>
            {movieInfo?.release_date ? movieInfo?.release_date : '-/-/-'}
          </Text>
        </View>
        <AirbnbRating
          count={10}
          reviews={['']}
          defaultRating={movieInfo?.vote_average}
          showRating={false}
          size={15}
          ratingContainerStyle={{
            marginTop: 12,
          }}
          isDisabled={true}
          selectedColor={'#a0587e'}
          unSelectedColor={'gray'}
        />
        <View
          style={{
            marginTop: 10,
          }}>
          <View>
            <Text style={styles.mainText}>
              {movieInfo?.overview ? movieInfo.overview : 'No overview'}
            </Text>

            <View style={styles.genresView}>
              {isArray(movieInfo?.genre_ids) &&
                movieInfo?.genre_ids.map((genre_id, ind) =>
                  genresWithId.map(
                    (genres, index) =>
                      genres?.id === genre_id && (
                        <View key={index} style={styles.genresInsideView}>
                          <Text style={styles.genresText}>
                            {genres?.name.toString()}
                          </Text>
                        </View>
                      ),
                  ),
                )}
            </View>
          </View>
        </View>

        <View style={styles.otherInfoView}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../assets/popularity.png')}
              resizeMode="center"
              style={styles.icon}
            />
            <Text style={{color: '#ddd'}}>{movieInfo?.popularity}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Details;
