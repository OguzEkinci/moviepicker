import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  discoverCard: {
    margin: 4,
    width: width / 1.5,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export { styles }
