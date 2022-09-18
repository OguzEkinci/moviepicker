import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, Animated, Easing, Text, StyleSheet, Dimensions, TouchableOpacity, View, Image } from "react-native"
import LottieView from 'lottie-react-native';
const { width, height } = Dimensions.get("window")
const Discover = ({ navigation }) => {

    const [containerVisible, setContainerVisible] = useState(true)
    return (
        <SafeAreaView style={styles.container}>
           
        </SafeAreaView>
    )
}
export { Discover }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#f2f2f2'
    },
    senario: {
        flex: 1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    diceButton: {
        flex: 0.5,
        flexDirection: 'column',
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    favButton: {
        flex: 0.5,
        flexDirection: 'column',
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#f2f2f2",
        fontSize: 20,
        fontWeight: "bold"
    }
})