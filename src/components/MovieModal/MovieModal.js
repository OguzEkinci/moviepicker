import {isEmptyArray} from 'formik';
import {isArray} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {genresWithId} from '../../data/genresData';
import FavButton from '../Button/FavButton';
import {styles} from './MovieModal.style';
const {width, height} = Dimensions.get('screen');
const MovieInfoModal = props => {
  const {modalVisible, setModalVisible, movieInfo} = props;
  return (
    <Modal
      style={{margin: 9}}
      propagateSwipe={true}
      animationIn={'tada'}
      isVisible={modalVisible}
      swipeDirection={'down'}
      onBackdropPress={() => {
        setModalVisible(false);
      }}
      onSwipeComplete={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        <FavButton movieObject={movieInfo} setModalVisible={setModalVisible} />
        <ScrollView
          style={{flexGrow: 1, width: width}}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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

          {movieInfo?.release_date ? (
            <View style={styles.yearAndTimeHeaderInside}>
              <Image
                style={styles.icon}
                resizeMode={'center'}
                source={require('../../assets/calendar.png')}
              />
              <Text>{movieInfo?.release_date}</Text>
            </View>
          ) : (
            <View style={styles.yearAndTimeHeaderInside}>
              <Image
                style={styles.icon}
                resizeMode={'center'}
                source={require('../../assets/calendar.png')}
              />
              <Text>-/-/-</Text>
            </View>
          )}

          {!movieInfo?.poster_path ? (
            <Image
              source={require('../../assets/gallery.png')}
              resizeMode={'contain'}
              style={{width: width - 40, height: 300}}
            />
          ) : (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movieInfo?.poster_path}`,
              }}
              resizeMode={'contain'}
              style={{width: width - 40, height: 300}}
            />
          )}

          <View
            style={{
              marginTop: 10,
            }}>
            <View>
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
              {movieInfo?.overview ? (
                <Text style={styles.mainText}>{movieInfo.overview}</Text>
              ) : (
                <Text style={styles.mainText}>No overview</Text>
              )}
            </View>
          </View>

          <View style={styles.otherInfoView}>
            {movieInfo?.vote_average !== 0 && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/star.png')}
                  resizeMode="center"
                  style={styles.icon}
                />
                <Text>{movieInfo?.vote_average}</Text>
                <Text>/10</Text>
                <Text>-{movieInfo?.vote_count}</Text>
              </View>
            )}
            {movieInfo?.popularity !== 0 && (
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
                <Text>{movieInfo?.popularity}</Text>
              </View>
            )}
            {/* {movieInfo?.spoken_languages && movieInfo?.spoken_languages.map((item, index) => {
                            return <View key={index} style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <Image source={require('../../assets/language.png')} resizeMode="center" style={styles.icon} />
                                <Text>{item.english_name}</Text>
                            </View>
                        })} */}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
export {MovieInfoModal};
