import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderRadius: 10,
    flex: 0.9,
    paddingTop: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainTitle: {
    width: 340,
    textAlign: 'center',
    color: '#191919',
    fontSize: 40,
    fontWeight: 'bold',
  },
  subTitle: {
    width: 340,
    textAlign: 'center',
    color: '#484848',
    fontSize: 17,
    marginTop: 8,
  },
  yearAndTimeHeader: {
    width: 340,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  yearAndTimeHeaderInside: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  mainText: {
    textAlign: 'center',
    color: '#484848',
    fontSize: 15,
    width: 340,
    padding: 4,
  },
  genresView: {
    width: 340,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genresInsideView: {
    backgroundColor: '#a0587e',
    margin: 8,
    borderRadius: 10,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 8,
  },
  genresText: {
    color: '#ddd',
    padding: 2,
  },
  otherInfoView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 340,
    marginTop: 16,
    paddingBottom: 16,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 3,
  },
  backgroundVideo: {
    width: 300,
    height: 300,
  },
});
export {styles};
