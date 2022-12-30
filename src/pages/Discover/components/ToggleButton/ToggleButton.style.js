import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  leftButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 25,
    backgroundColor: '#ff685d',
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 25,
    backgroundColor: '#ff685d',
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
export {styles};
