import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
  mainTitle: {
    width: 340,
    textAlign: 'center',
    color: '#191919',
    fontSize: 40,
    fontWeight: 'bold'
  },
  subTitle: {
    width: 340,
    textAlign: 'center',
    color: '#484848',
    fontSize: 17,
    marginTop: 8
  },
  yearAndTimeHeader: {
    width: 340,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  yearAndTimeHeaderInside: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8
  },
  mainText: {
    textAlign: 'center',
    color: '#484848',
    fontSize: 15,
    width: 340,
    padding: 4
  },
  genresView: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  genresInsideView: {
    backgroundColor: '#f2f2f2',
    margin: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#484848',
    padding: 4
  },
  otherInfoView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 340,
    marginTop: 16
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 3
  }
})
export { styles }
