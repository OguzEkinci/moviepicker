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
  ScrollView,
  FlatList
} from 'react-native'
import LottieView from 'lottie-react-native'
import { FlashList } from '@shopify/flash-list'
import { styles } from './Discover.style'
import LinearGradient from 'react-native-linear-gradient'
import { DiscoverCard } from '../../components/DiscoverCard/DiscoverCard'
import { MovieInfoModal } from '../../components'
import { Portal, PortalHost } from '@gorhom/portal'
import { getPopular } from '../../services/DiscoverServices/getPopular'
const { width, height } = Dimensions.get('window')

const Discover = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [popularList, setPopularList] = useState([])
  const DATA = [
    {
      title: 'First Item'
    },
    {
      title: 'First Item'
    },
    {
      title: 'First Item'
    },
    {
      title: 'First Item'
    },
    {
      title: 'Second Item'
    }
  ]

  useEffect(() => {
    getPopular()
      .then(res => setPopularList(res.data.results))
      .catch(err => console.log('popular err', err))
  }, [])

  const renderGetPopular = ({ item }) => {
    return <DiscoverCard item={item} setModalVisible={setModalVisible} />
  }
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: height * 0.14
        }}
        colors={['#ddd', '#ddd', '#333']}
      >
        <ScrollView>
          <Text>POPULAR</Text>
          <FlatList
            data={popularList}
            horizontal
            renderItem={renderGetPopular}
            estimatedItemSize={400}
          />
        </ScrollView>
        <MovieInfoModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          /* movieInfo={randomMovie}
        setMovieInfo={setRandomMovie} */
        />
      </LinearGradient>
    </SafeAreaView>
  )
}
export { Discover }
