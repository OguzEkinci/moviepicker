import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ImageBackground,
  Appearance,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {ErrorModal, Loader} from '../../components';
import {getFilterMovieDetail} from '../../services/DiceServices/getMovieDetail';
import SelectDropdown from 'react-native-select-dropdown';
import {genresWithId} from '../../data/genresData';
import {isEmpty} from 'lodash';
import {language, languageWithInfo} from '../../data/language';
import {styles} from './Dice.style';
import I18n from '../../assets/util/lang/_i18n';
import {getMovieDetail} from '../../services/DiceServices/getMovieAllDetails';
import {MultiSelect} from 'react-native-element-dropdown';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-admob/admob';

const {width, height} = Dimensions.get('window');
const Dice = ({navigation}) => {
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState([]);
  const [lng, setLanguage] = useState('');
  const lngRef = useRef(null);
  const [dropdownRadiusVis, setDropdownRadiusVis] = useState(true);
  let counter = 0;
  const _getMovie = async () => {
    setLoadingVisible(true);
    const randomNumberFilter = Math.floor(Math.random() * 500) + 1;
    await getFilterMovieDetail(
      randomNumberFilter,
      startDate,
      endDate,
      category,
      lng,
    )
      .then(res => {
        counter++;
        const randomNumberFilterMovie =
          Math.floor(Math.random() * res.data.results.length) + 1;
        if (
          !isEmpty(res.data.results) &&
          !isEmpty(res.data?.results[randomNumberFilterMovie]?.poster_path)
        ) {
          setLoadingVisible(false);
          //discover apisi kapsamlı bir liste, oradan movie id'sini alıp detail apisine istek atıyoruz
          getMovieDetail(res.data.results[randomNumberFilterMovie]?.id)
            .then(res => {
              navigation.navigate('Details', {
                movieInfo: res.data,
                isDicePage: true,
              });
            })
            .catch(err => {
              setErrorModalVisible(true);
              setLoadingVisible(false);
            });
          /*  */
        } else {
          if (counter === 20) {
            //20 kere istek attıktan sonra film bulamadıysa işlemi durduracak
            counter = 0;
            setLoadingVisible(false);
            return setErrorModalVisible(true);
          } else _getMovie();
        }
      })
      .catch(err => {
        setErrorModalVisible(true);
        setLoadingVisible(false);
      });
  };

  const _setCategoryId = categoryName => {
    // bu fonksiyon kategori idsini alıp servise yollanacak kategori parametresini atamak için
    genresWithId.forEach(item => {
      item.name === categoryName && setCategory(item.id);
    });
  };
  const _setLanguage = language => {
    languageWithInfo.forEach(item => {
      item.english_name === language && setLanguage(item.iso_639_1);
    });
  };

  const _clearFilter = () => {
    setStartDate('');
    setEndDate('');
    setCategory([]);
    setLanguage('');
    lngRef.current?.reset();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{
          flex: 1,
          paddingTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('../../assets/background.jpg')}>
        <View>
          <BannerAd
            size={BannerAdSize.BANNER}
            unitId={'ca-app-pub-1678357774967097/7608759604'}
          />
        </View>
        <View style={styles.dropdownContainer}>
          <MultiSelect
            style={[
              styles.dropdown,
              dropdownRadiusVis
                ? {
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                  }
                : {
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            selectedStyle={styles.selectedStyle}
            containerStyle={{
              top: -2,
              backgroundColor: '#323232',
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderWidth: 0,
            }}
            activeColor={'#123536'}
            maxSelect={5}
            itemTextStyle={{color: 'white'}}
            data={genresWithId}
            labelField="name"
            valueField="id"
            placeholder={I18n.t('selectCategory')}
            value={category}
            onFocus={() => setDropdownRadiusVis(false)}
            onBlur={() => setDropdownRadiusVis(true)}
            renderRightIcon={() => {
              <View />;
            }}
            onChange={item => {
              setCategory(item);
            }}
          />
        </View>
        <SelectDropdown
          ref={lngRef}
          defaultValue={lng}
          search
          searchPlaceHolder={I18n.t('searchLanguage')}
          searchPlaceHolderColor={'black'}
          data={language}
          defaultButtonText={I18n.t('selectLanguage')}
          dropdownStyle={{
            backgroundColor: '#323232',
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
          }}
          rowTextStyle={{color: 'white'}}
          searchInputStyle={{backgroundColor: '#c7c7c7'}}
          buttonTextStyle={{color: '#c7c7c7', fontWeight: 'bold', fontSize: 16}}
          onSelect={(selectedItem, index) => {
            _setLanguage(selectedItem);
          }}
          buttonStyle={styles.bottomDropdown}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        <View
          style={{
            width: width,
            flexDirection: 'row',
            height: 100,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#c7c7c7',
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 50,
            }}>
            <Text
              style={{
                color: '#323232',
                fontWeight: 'bold',
                textAlign: 'right',
                width: 100,
                paddingRight: 4,
              }}>
              {I18n.t('minYear')}
            </Text>
            <TextInput
              value={startDate}
              onChangeText={setStartDate}
              keyboardType="number-pad"
              maxLength={4}
              placeholder={I18n.t('year')}
              placeholderTextColor={'#ddd'}
              style={styles.leftInput}
            />
          </View>
          <View
            style={{
              backgroundColor: '#c7c7c7',
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
            }}>
            <Text
              style={{
                color: '#323232',
                fontWeight: 'bold',
                textAlign: 'left',
                width: 100,
                paddingLeft: 4,
              }}>
              {I18n.t('maxYear')}
            </Text>
            <TextInput
              value={endDate}
              onChangeText={setEndDate}
              keyboardType="number-pad"
              maxLength={4}
              placeholder={I18n.t('year')}
              placeholderTextColor={'#ddd'}
              style={styles.rightInput}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => _clearFilter()}>
          <Image
            source={require('../../assets/filter.png')}
            style={{
              width: 50,
              height: 50,
              tintColor:
                Appearance.getColorScheme() === 'dark' ? '#2ec4b6' : '#2ec4b6',
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: width,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => _getMovie()}>
          <LottieView
            style={{height: 150}}
            source={require('../../animations/101477-play-ww.json')}
            autoPlay
            loop
          />
        </TouchableOpacity>
        {loadingVisible && <Loader />}

        <ErrorModal
          errorModalVisible={errorModalVisible}
          setErrorModalVisible={setErrorModalVisible}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
export {Dice};
