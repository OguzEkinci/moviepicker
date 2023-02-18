import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainTitle: {
    width: width - 30,
    textAlign: 'center',
    color: '#ddd',
    fontSize: 40,
    fontWeight: 'bold',
  },
  subTitle: {
    width: width - 30,
    textAlign: 'center',
    color: '#ddd',
    fontSize: 17,
    marginTop: 8,
  },
  yearAndTimeHeader: {
    width: width - 30,
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
    marginLeft: 8,
  },
  mainText: {
    textAlign: 'center',
    color: '#ddd',
    fontSize: 15,
    width: width - 30,
    padding: 4,
  },
  genresView: {
    width: width - 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    width: width - 30,
    marginTop: 16,
    paddingBottom: 16,
  },
  icon: {
    tintColor: '#a0587e',
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
