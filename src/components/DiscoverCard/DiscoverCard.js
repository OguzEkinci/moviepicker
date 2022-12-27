import { BlurView } from '@react-native-community/blur'
import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import ImagedCarouselCard from 'react-native-imaged-carousel-card'
import { MovieInfoModal } from '../MovieModal/MovieModal'
import { styles } from './DiscoverCard.style'
const { width, height } = Dimensions.get('window')
const DiscoverCard = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.discoverCard}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true)
        }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ImagedCarouselCard
            text={item?.title}
            textStyle={{color: '#ddd', fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}
            style={styles.discoverCard}
            width={width / 1.5}
            height={100}
            shadowColor='#051934'
            source={require('../../assets/background.png')}
            // source={{ uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`}}
          />
        </View>
      </TouchableWithoutFeedback>
      <MovieInfoModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          movieInfo={item}
        />
    </View>
  )
}
export { DiscoverCard }
