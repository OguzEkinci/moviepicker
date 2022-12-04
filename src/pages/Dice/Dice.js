import React, { useEffect, useRef, useState } from 'react'
import {
  SafeAreaView,
  Animated,
  Easing,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
  Alert,
  TextInput,
  ImageBackground
} from 'react-native'
import LottieView from 'lottie-react-native'
import { MovieInfoModal, ErrorModal, Loader } from '../../components'
import { getFilterMovieDetail } from '../../services/DiceServices/getMovieDetail'
import SelectDropdown from 'react-native-select-dropdown'
import { genres, genresWithId } from '../../data/genresData'
import { isEmpty } from 'lodash'
import LinearGradient from 'react-native-linear-gradient'
import { language, languageWithInfo } from '../../data/language'
const { width, height } = Dimensions.get('window')
const Dice = ({ navigation }) => {
  const [loadingVisible, setLoadingVisible] = useState(false)
  const [randomMovie, setRandomMovie] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [errorModalVisible, setErrorModalVisible] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [category, setCategory] = useState('')
  const [lng, setLanguage] = useState('')
  const lngRef = useRef(null)
  const categoryRef = useRef(null)
  const _getMovie = async () => {
    setLoadingVisible(true)
    const randomNumberFilter = Math.floor(Math.random() * 500) + 1
    await getFilterMovieDetail(
      randomNumberFilter,
      startDate,
      endDate,
      category,
      lng
    ).then(res => {
      const randomNumberFilterMovie =
        Math.floor(Math.random() * res.data.results.length) + 1
      if (!isEmpty(res.data.results) && !isEmpty(res.data?.results[randomNumberFilterMovie]?.poster_path)) {
        setRandomMovie(res.data.results[randomNumberFilterMovie])
        setModalVisible(true)
        setLoadingVisible(false)
      } else {
        _getMovie()
      }
    })
  }

  const _setCategoryId = categoryName => {
    // bu fonksiyon kategori idsini alıp servise yollanacak kategori parametresini atamak için
    genresWithId.forEach(item => {
      item.name === categoryName && setCategory(item.id)
    })
  }

  const _setLanguage = language => {
    languageWithInfo.forEach(item => {
      item.english_name === language && setLanguage(item.iso_639_1)
    })
  }

  const _clearFilter = () => {
    setStartDate('')
    setEndDate('')
    setCategory('')
    setLanguage('')
    lngRef.current?.reset()
    categoryRef.current?.reset()
  }
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 50
        }}
        colors={['#ddd', '#ddd', '#333']}
      >
        <SelectDropdown
        ref={categoryRef}
        defaultValue={category}
          search
          searchPlaceHolder={'Search Category'}
          searchPlaceHolderColor={'darkgrey'}
          data={genres}
          defaultButtonText={'Select Category'}
          onSelect={(selectedItem, index) => {
            _setCategoryId(selectedItem)
          }}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderWidth: 3,
            borderRadius: 10,
            borderColor: '#191919'
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
        <SelectDropdown
        ref={lngRef}
        defaultValue={lng}
          search
          searchPlaceHolder={'Search Language'}
          searchPlaceHolderColor={'darkgrey'}
          data={language}
          defaultButtonText={'Select Language'}
          onSelect={(selectedItem, index) => {
            _setLanguage(selectedItem)
          }}
          buttonStyle={{
            marginTop: 20,
            backgroundColor: 'transparent',
            borderWidth: 3,
            borderRadius: 10,
            borderColor: '#191919'
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
        <View
          style={{
            marginTop: 20,
            width: width,
            flexDirection: 'row',
            height: 100,
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <View>
            <Text style={{ color: '#484848', alignSelf: 'center' }}>
              Min. Year
            </Text>
            <TextInput
            value={startDate}
              onChangeText={setStartDate}
              keyboardType='number-pad'
              maxLength={4}
              placeholder='Year'
              style={{
                padding: 8,
                width: 75,
                borderWidth: 3,
                borderRadius: 10,
                borderColor: '#191919',
                height: 35
              }}
            />
          </View>
          <View>
            <Text style={{ color: '#484848', alignSelf: 'center' }}>
              Max. Year
            </Text>
            <TextInput
              value={endDate}
              onChangeText={setEndDate}
              keyboardType='number-pad'
              maxLength={4}
              placeholder='Year'
              style={{
                padding: 8,
                width: 75,
                borderWidth: 3,
                borderRadius: 10,
                borderColor: '#191919',
                height: 35
              }}
            />
          </View>
        </View>
        <TouchableOpacity onPress={()=>_clearFilter()}>
          <Image source={require('../../assets/filter.png')} style={{width: 50, height: 50}} resizeMode={'contain'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width,
            height: 300,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => _getMovie()}
        >
          <LottieView
            style={{ height: 200 }}
            source={require('../../animations/5884-video-movie.json')}
            autoPlay
            loop
          />
        </TouchableOpacity>
        {loadingVisible && <Loader />}

        <MovieInfoModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          movieInfo={randomMovie}
          setMovieInfo={setRandomMovie}
        />
        <ErrorModal
          errorModalVisible={errorModalVisible}
          setErrorModalVisible={setErrorModalVisible}
        />
      </LinearGradient>
    </SafeAreaView>
  )
}
export { Dice }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
