import AnimatedLottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import Modal from 'react-native-modal';
import {styles} from '../../Style';
const {width, height} = Dimensions.get('screen');
const ErrorModal = props => {
  const {errorModalVisible, setErrorModalVisible} = props;
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <Modal
        animationIn={'tada'}
        isVisible={errorModalVisible}
        swipeDirection={'down'}
        onBackdropPress={() => {
          setErrorModalVisible(false);
        }}
        onSwipeComplete={() => {
          setErrorModalVisible(false);
        }}>
        <View
          style={{
            backgroundColor: 'pink',
            padding: 10,
            borderTopRightRadius: 200,
            borderBottomLeftRadius: 200,
            flex: 0.3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AnimatedLottieView
            style={{height: 200}}
            source={require('../../animations/41134-404-not-found-ghost.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>
    </View>
  );
};
export {ErrorModal};
