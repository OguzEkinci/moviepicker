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
import ImagedCarouselCard from 'react-native-imaged-carousel-card'
import { FlashList } from '@shopify/flash-list'
import { styles } from './Discover.style'
import LinearGradient from 'react-native-linear-gradient'
import { DiscoverCard } from '../../components/DiscoverCard/DiscoverCard'
import { Loader, MovieInfoModal } from '../../components'
import { Portal, PortalHost } from '@gorhom/portal'
import { getPopular } from '../../services/DiscoverServices/getPopular'
const { width, height } = Dimensions.get('window')

const Discover = ({ navigation }) => {
  const [popularList, setPopularList] = useState([])
  const [loadingVisible, setLoadingVisible] = useState(false)

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
    setLoadingVisible(true)
    getPopular()
      .then(res => {
        setLoadingVisible(false)
        setPopularList(res.data.results)
      })
      .catch(err => {
        setLoadingVisible(false)
      })
  }, [])

  const renderGetPopular = ({ item }) => {
    return <DiscoverCard item={item} />
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
        {loadingVisible && <Loader />}
      </LinearGradient>
    </SafeAreaView>
  )
}
export { Discover }
