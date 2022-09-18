import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import Modal from 'react-native-modal'
import { styles } from '../../Style'
const { width, height } = Dimensions.get("screen")
const MovieInfoModal = props => {
    const { modalVisible, setModalVisible, movieInfo } = props
    console.log(movieInfo)
    return <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
        <Modal animationIn={"tada"} isVisible={modalVisible} swipeDirection={"down"} onSwipeComplete={() => { setModalVisible(false) }}>
            <View style={{ backgroundColor: '#fff', borderRadius: 10, flex: 0.8, padding: 12, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.mainTitle}>{movieInfo.original_title}</Text>
                <Text style={styles.subTitle}>{movieInfo.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 10, height: 10 }} resizeMode={'center'} source={require('../../assets/calendar.png')} />
                    <Text>{movieInfo.release_date}</Text>
                    <Image style={{ width: 10, height: 10 }} resizeMode={'center'} source={require('../../assets/sand-clock.png')} />
                    <Text>{movieInfo.runtime}</Text>
                </View>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500` + movieInfo.poster_path }} resizeMode={"contain"} style={{ width: width, height: 250 }} />
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            {movieInfo?.genres && movieInfo?.genres.map((item, index) => {
                                return <Text key={index}>{item.name}</Text>
                            })}
                        </View>
                        <Text>{movieInfo.overview}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: width - 45, marginTop: 4, }}>
                    {movieInfo.vote_average !== 0 &&
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../assets/star.png')} resizeMode="center" style={{ width: 15, height: 15 }} />
                            <Text>{movieInfo.vote_average}</Text>
                            <Text>/10</Text>
                            <Text>-{movieInfo.vote_count}</Text>
                        </View>}
                    {movieInfo.popularity !== 0 && <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/popularity.png')} resizeMode="center" style={{ width: 15, height: 15 }} />
                        <Text>{movieInfo.popularity}</Text>
                    </View>}
                    {movieInfo.spoken_languages && movieInfo.spoken_languages.map((item,index) => {
                        return <View key={index} style={{flexDirection: 'row'}}>
                            <Image source={require('../../assets/language.png')} resizeMode="center" style={{ width: 15, height: 15 }} />
                            <Text>{item.english_name}</Text>
                        </View>
                    })}
                </View>
            </View>
        </Modal>
    </View>
}
export { MovieInfoModal }