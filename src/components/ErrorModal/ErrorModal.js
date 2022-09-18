import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, Dimensions } from "react-native";
import Modal from 'react-native-modal'
const { width, height } = Dimensions.get("screen")
const ErrorModal = props => {
    const { errorModalVisible, setErrorModalVisible } = props
    console.log(errorModalVisible)
    return <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        <Modal animationIn={"tada"} isVisible={errorModalVisible} swipeDirection={"down"} onSwipeComplete={() => { setErrorModalVisible(false) }}>
            <View style={{ backgroundColor: '#fff', borderRadius: 10, flex: 0.3 }}>
                <Text>FİLM BULAMADIK KANKA BAŞKA TEKRAR DENE</Text>
            </View>
        </Modal>
    </View>
}
export { ErrorModal }