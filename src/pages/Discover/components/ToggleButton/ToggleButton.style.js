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
  },
  rightButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 25,
    backgroundColor: '#ff685d',
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});
export {styles};
