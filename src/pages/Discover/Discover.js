import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {styles} from './Discover.style';
import {ErrorModal, Loader} from '../../components';
import {getPopular} from '../../services/DiscoverServices/getPopular';
import {getTopRated} from '../../services/DiscoverServices/getTopRated';
import {getTrending} from '../../services/DiscoverServices/getTrending';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Carousel from 'react-native-snap-carousel';
import {DiscoverCard} from '../../components/DiscoverCard/DiscoverCard';
import I18n from '../../assets/util/lang/_i18n';
const {height} = Dimensions.get('window');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.26);
const Discover = ({navigation}) => {
  const [popularList, setPopularList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [trendingList, setTrendingList] = useState([]);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [timeRange, setTimeRange] = useState('day');
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  useEffect(() => {
    setLoadingVisible(true);
    getPopular()
      .then(res => {
        setLoadingVisible(false);
        setPopularList(res.data.results);
      })
      .catch(err => {
        setLoadingVisible(false);
        setErrorModalVisible(true);
      });
    getTopRated()
      .then(res => {
        setTopRatedList(res.data.results);
      })
      .catch(err => {
        setLoadingVisible(false);
        setErrorModalVisible(true);
      });
    getTrending(timeRange)
      .then(res => {
        setTrendingList(res.data.results);
      })
      .catch(err => {
        setLoadingVisible(false);
        setErrorModalVisible(true);
      });
  }, []);

  const renderListCard = ({item, key}) => {
    return (
      <DiscoverCard
        navigation={navigation}
        discover={true}
        item={item}
        key={key}
      />
    );
  };

  const handleToggle = () => {
    getTrending(timeRange)
      .then(res => {
        setTrendingList(res.data.results);
      })
      .catch(err => {
        setLoadingVisible(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={require('../../assets/background.jpg')}>
        <ScrollView>
          <ScrollView>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>{I18n.t('trending')}</Text>
              <ToggleButton
                onPress={handleToggle}
                timeRange={timeRange}
                setTimeRange={setTimeRange}
              />
            </View>
            <Carousel
              data={trendingList}
              renderItem={renderListCard}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              layout={'stack'}
              layoutCardOffset={`18`}
              contentContainerCustomStyle={{
                paddingLeft: 70,
              }}
            />
          </ScrollView>
          <ScrollView>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>{I18n.t('popular')}</Text>
            </View>
            <Carousel
              data={popularList}
              renderItem={renderListCard}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              layout={'stack'}
              layoutCardOffset={`18`}
              contentContainerCustomStyle={{
                paddingLeft: 70,
              }}
            />
          </ScrollView>
          <ScrollView>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>{I18n.t('topRated')}</Text>
            </View>
            <Carousel
              data={topRatedList}
              renderItem={renderListCard}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              layout={'stack'}
              layoutCardOffset={`18`}
              contentContainerCustomStyle={{
                paddingLeft: 70,
              }}
            />
          </ScrollView>
          <View style={{height: height * 0.14}} />
        </ScrollView>
        {loadingVisible && <Loader />}
        <ErrorModal
          errorModalVisible={errorModalVisible}
          setErrorModalVisible={setErrorModalVisible}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Discover;
