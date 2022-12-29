import React, {useEffect, useRef, useState} from 'react';
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
  ScrollView,
  FlatList,
} from 'react-native';
import LottieView from 'lottie-react-native';
import ImagedCarouselCard from 'react-native-imaged-carousel-card';
import {FlashList} from '@shopify/flash-list';
import {styles} from './Discover.style';
import LinearGradient from 'react-native-linear-gradient';
import {DiscoverCard} from '../../components/DiscoverCard/DiscoverCard';
import {Loader, MovieInfoModal} from '../../components';
import {Portal, PortalHost} from '@gorhom/portal';
import {getPopular} from '../../services/DiscoverServices/getPopular';
import {getTopRated} from '../../services/DiscoverServices/getTopRated';
import {getTrending} from '../../services/DiscoverServices/getTrending';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Carousel from 'react-native-snap-carousel';
const {width, height} = Dimensions.get('window');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.25);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
const Discover = ({navigation}) => {
  const [popularList, setPopularList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [trendingList, setTrendingList] = useState([]);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [timeRange, setTimeRange] = useState('day');
  useEffect(() => {
    setLoadingVisible(true);
    getPopular()
      .then(res => {
        setLoadingVisible(false);
        setPopularList(res.data.results);
      })
      .catch(err => {
        setLoadingVisible(false);
      });
    getTopRated()
      .then(res => {
        setTopRatedList(res.data.results);
      })
      .catch(err => {
        setLoadingVisible(false);
      });
    getTrending(timeRange)
      .then(res => {
        setTrendingList(res.data.results);
      })
      .catch(err => {
        setLoadingVisible(false);
      });
  }, []);

  const renderListCard = ({item}) => {
    return <DiscoverCard item={item} />;
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
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.5, 0.6]}
        colors={['#4c669f', '#3b5998', '#192f6a']}>
        <ScrollView>
          <ScrollView>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>TRENDING</Text>
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
            {/* <FlatList
              data={trendingList}
              horizontal
              renderItem={renderListCard}
              estimatedItemSize={400}
            /> */}
          </ScrollView>
          <ScrollView>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>POPULAR</Text>
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
            {/* <FlatList
              data={popularList}
              horizontal
              renderItem={renderListCard}
              estimatedItemSize={400}
            /> */}
          </ScrollView>
          <ScrollView>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>TOP RATED</Text>
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
            {/* <FlatList
              data={topRatedList}
              horizontal
              renderItem={renderListCard}
              estimatedItemSize={400}
            /> */}
          </ScrollView>
          <View style={{height: height * 0.14}} />
        </ScrollView>
        {loadingVisible && <Loader />}
      </LinearGradient>
    </SafeAreaView>
  );
};
export {Discover};
