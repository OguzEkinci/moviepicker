import React from 'react'
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const { width, height } = Dimensions.get('screen')

const Fav = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        colors={['#ddd', '#ddd', '#333']}
      >
        <Text>DENEM</Text>
      </LinearGradient>
    </SafeAreaView>
  )
}
export { Fav }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2'
  },
  header: {
    flex: 0.07,
    width: width,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 8,
    paddingTop: 8
  }
})
