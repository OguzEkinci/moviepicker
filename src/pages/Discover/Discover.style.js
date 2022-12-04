import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundGradient: 'vertical',
    backgroundGradientTop: '#333333',
    backgroundGradientBottom: '#666666'
  },
  senario: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  diceButton: {
    flex: 0.5,
    flexDirection: 'column',
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  favButton: {
    flex: 0.5,
    flexDirection: 'column',
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#f2f2f2',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
export { styles }
