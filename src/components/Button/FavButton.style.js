import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  touchable: {
    width: 45,
    height: 45,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  image: {
    width: 45,
    height: 45,
    tintColor: '#2ec4b6',
  },
});
export {styles};
