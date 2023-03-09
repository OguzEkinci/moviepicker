import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  leftButton: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#ff685d',
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
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#ff685d',
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
