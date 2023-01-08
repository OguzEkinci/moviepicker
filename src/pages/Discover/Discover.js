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
import {Loader} from '../../components';
import {getPopular} from '../../services/DiscoverServices/getPopular';
import {getTopRated} from '../../services/DiscoverServices/getTopRated';
import {getTrending} from '../../services/DiscoverServices/getTrending';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Carousel from 'react-native-snap-carousel';
const {height} = Dimensions.get('window');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.25);
const Discover = () => {
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
    return <View></View>;
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
          </ScrollView>
          <View style={{height: height * 0.14}} />
        </ScrollView>
        {loadingVisible && <Loader />}
      </ImageBackground>
    </SafeAreaView>
  );
};
export {Discover};
