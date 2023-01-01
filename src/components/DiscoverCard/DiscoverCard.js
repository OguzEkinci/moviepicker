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
import ImageBackgroundCard from '../MovieCard/ImageBackGroundCard';
import {MovieInfoModal} from '../MovieModal/MovieModal';
import {styles} from './DiscoverCard.style';
const {width} = Dimensions.get('window');
const DiscoverCard = ({item, key}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View key={key} style={styles.container}>
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
          <ImageBackgroundCard
            text={item?.title}
            textStyle={{
              color: '#ddd',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              paddingLeft: 5,
              paddingRight: 5,
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
