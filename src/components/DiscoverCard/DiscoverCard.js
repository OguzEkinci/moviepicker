import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'
import { styles } from './DiscoverCard.style'
const DiscoverCard = ({ item, setModalVisible }) => {
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
          <Text>
            {item.title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}
export { DiscoverCard }
