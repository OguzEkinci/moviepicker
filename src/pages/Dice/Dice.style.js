import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomDropdown: {
    marginTop: 20,
    backgroundColor: '#a0587e',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 12,
  },
  topDropdown: {
    marginTop: 20,
    backgroundColor: '#a0587e',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 12,
  },
  leftInput: {
    padding: 8,
    width: 100,
    height: 35,
    textAlign: 'center',
    backgroundColor: '#ff685d',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    color: '#ddd',
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 12,
  },
  rightInput: {
    padding: 8,
    width: 100,
    height: 35,
    textAlign: 'center',
    backgroundColor: '#ff685d',
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    color: '#ddd',
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 12,
  },
  filterButton: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {styles};
