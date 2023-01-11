import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';

import Modal from 'react-native-modal';
const ErrorModal = props => {
  const {errorModalVisible, setErrorModalVisible} = props;
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <Modal
        animationIn={'tada'}
        isVisible={errorModalVisible}
        swipeDirection={'down'}
        style={{margin: 0, justifyContent: 'center', alignItems: 'center'}}
        onBackdropPress={() => {
          setErrorModalVisible(false);
        }}
        onSwipeComplete={() => {
          setErrorModalVisible(false);
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AnimatedLottieView
            style={{height: 200}}
            source={require('../../animations/4339-not-found.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>
    </View>
  );
};
export {ErrorModal};
