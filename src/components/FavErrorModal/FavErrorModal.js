import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {Text, View} from 'react-native';
import I18n from '../../assets/util/lang/_i18n';
import Modal from 'react-native-modal';
const FavErrorModal = props => {
  const {modalVisible, setModalVisible} = props;
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <Modal
        animationIn={'tada'}
        isVisible={modalVisible}
        swipeDirection={'down'}
        style={{margin: 0, justifyContent: 'center', alignItems: 'center'}}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        onSwipeComplete={() => {
          setModalVisible(false);
        }}>
        <View
          style={{
            backgroundColor: '#323232',
            justifyContent: 'center',
            alignItems: 'center',
            height: 150,
            width: 300,
            borderRadius: 100,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
            {I18n.t('favError')}
          </Text>
        </View>
      </Modal>
    </View>
  );
};
export {FavErrorModal};
