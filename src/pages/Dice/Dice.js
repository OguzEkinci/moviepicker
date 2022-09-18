import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, Animated, Easing, Text, StyleSheet, Dimensions, TouchableOpacity, View, Image, Alert, TextInput } from "react-native"
import LottieView from 'lottie-react-native'
import { MovieInfoModal, ErrorModal, Loader } from '../../components';
import { getMovieDetail, getFilterMovieDetail } from '../../services/DiceServices/getMovieDetail'
const { width, height } = Dimensions.get("window")
const Dice = ({ navigation }) => {
    const [loadingVisible, setLoadingVisible] = useState(false)
    const [randomMovie, setRandonMovie] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [errorModalVisible, setErrorModalVisible] = useState(false)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const randomNumberNormal = Math.floor(Math.random() * 1000000) + 1
    const randomNumberFilter = Math.floor(Math.random() * 1000) + 1
    const randomNumberFilterMovie = Math.floor(Math.random() * 20) + 1

    const _getMovie = () => {
        setLoadingVisible(true)
        if (!(startDate && endDate))
            getMovieDetail(randomNumberNormal).then(res => {
                setTimeout(() => {
                    if (!res.data.adult) {
                        setRandonMovie(res.data)
                        setModalVisible(true)
                        setLoadingVisible(false)
                    } else {
                        setErrorModalVisible(true)
                        setLoadingVisible(false)
                    }
                }, 500)
            }).catch(() => {
                setTimeout(() => {
                    setErrorModalVisible(true)
                    setLoadingVisible(false)
                }, 500)
            })
        else getFilterMovieDetail(randomNumberFilter, startDate, endDate).then(res => {
            setTimeout(() => {
                setRandonMovie(res.data.results[randomNumberFilterMovie])
                setModalVisible(true)
                setLoadingVisible(false)
            }, 500)
        }).catch(() => {
            setTimeout(() => {
                setErrorModalVisible(true)
                setLoadingVisible(false)
            }, 500)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            {loadingVisible && <Loader />}
            <View style={{ marginTop: 20, width: width, flexDirection: 'row', height: 100, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View>
                    <Text style={{ color: '#484848', alignSelf: 'center' }}>Min. Year</Text>
                    <TextInput onChangeText={setStartDate} keyboardType='number-pad' maxLength={4}  placeholder='Year' style={{padding: 8, width: 75, borderWidth: 3, borderRadius: 10, borderColor: "#191919", height: 35 }} />
                </View>
                <View>
                    <Text style={{ color: '#484848', alignSelf: 'center' }}>Max. Year</Text>
                    <TextInput onChangeText={setEndDate} keyboardType='number-pad' maxLength={4} placeholder='Year' style={{padding: 8, width: 75, borderWidth: 3, borderRadius: 10, borderColor: "#191919", height: 35 }} />
                </View>
            </View>
            <TouchableOpacity style={{ width: width, height: 400, justifyContent: 'center', alignItems: 'center', }} onPress={() => _getMovie()}>
                <LottieView
                    style={{ height: 200 }}
                    source={require('../../animations/5884-video-movie.json')}
                    autoPlay
                    loop
                />
            </TouchableOpacity>
            <MovieInfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} movieInfo={randomMovie} />
            <ErrorModal errorModalVisible={errorModalVisible} setErrorModalVisible={setErrorModalVisible} />
        </SafeAreaView>
    )
}
export { Dice }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})