import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
const Loader = () => {
  return (
    <View>
      <Modal isVisible={true} transparent={true}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <LottieView
            style={{height: 400}}
            source={require('../../animations/97111-loading-spinner-dots.json')}
            autoPlay
            loop
          />
        </View>
      </Modal>
    </View>
  );
};
export {Loader};
