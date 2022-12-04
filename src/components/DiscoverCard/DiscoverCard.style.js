import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  discoverCard: {
    margin: 4,
    width: width / 3,
    height: 250,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: '#484848',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export { styles }
