import {BlurView} from '@react-native-community/blur';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ImagedCarouselCard from 'react-native-imaged-carousel-card';
import {MovieInfoModal} from '../MovieModal/MovieModal';
import {styles} from './DiscoverCard.style';
const {width} = Dimensions.get('window');
const DiscoverCard = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImagedCarouselCard
            text={item?.title}
            textStyle={{
              color: '#ddd',
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              overflow: 'hidden',
            }}
            overlayBackgroundColor="#051934"
            style={styles.discoverCard}
            width={width / 3}
            shadowColor="#051934"
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <MovieInfoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        movieInfo={item}
      />
    </View>
  );
};
export {DiscoverCard};
