import React from 'react';
import { View, Text, Dimensions } from 'react-native'
import Modal from "react-native-modal";
import LottieView from 'lottie-react-native';
const Loader = () => {
    return (
        <Modal  isVisible={true} transparent={true}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <LottieView
                    style={{ height: 400 }}
                    source={require('../../animations/1961-movie-loading.json')}
                    autoPlay
                    loop
                />
            </View>
        </Modal>)
}
export { Loader }