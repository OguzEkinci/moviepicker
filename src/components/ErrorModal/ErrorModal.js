import AnimatedLottieView from "lottie-react-native";
import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, Dimensions, Image } from "react-native";
import Modal from 'react-native-modal'
import { styles } from "../../Style";
const { width, height } = Dimensions.get("screen")
const ErrorModal = props => {
    const { errorModalVisible, setErrorModalVisible } = props
    return <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        <Modal animationIn={"tada"} isVisible={errorModalVisible} swipeDirection={"down"} onSwipeComplete={() => { setErrorModalVisible(false) }}>
            <View style={{ backgroundColor: '#fff',padding: 10, borderRadius: 10, flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                <AnimatedLottieView
                    style={{ height: 200 }}
                    source={require('../../animations/13001-404-error.json')}
                    autoPlay
                    loop
                />
                <Text style={styles.mainTitle}>Movie Not Found</Text>
                <Text style={styles.mainTitle}>Try Again</Text>
            </View>
        </Modal>
    </View>
}
export { ErrorModal }