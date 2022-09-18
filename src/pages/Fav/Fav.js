import React from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
const {width,height} = Dimensions.get("screen")

const Fav = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => { navigation.navigate("Dice") }} >
                <Image source={require("../../assets/back-button.png")} resizeMode={"center"} style={{  width: 25, height: 25 }} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export { Fav }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#f2f2f2'
    },
    header: {
        flex: 0.07,
        width: width,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 8,
        paddingTop: 8
    },
})