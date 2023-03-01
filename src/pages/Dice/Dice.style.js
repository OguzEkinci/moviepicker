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
    backgroundColor: '#323232',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    width: width - 170,
    height: 55,
  },
  leftInput: {
    padding: 8,
    width: 100,
    height: 35,
    textAlign: 'center',
    backgroundColor: '#323232',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    color: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  rightInput: {
    padding: 8,
    width: 100,
    height: 35,
    textAlign: 'center',
    backgroundColor: '#323232',
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    color: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  filterButton: {
    borderRadius: 100,
    backgroundColor: 'rgba(50,50,50,0)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 24,
  },
  //dropwdown
  dropdownContainer: {
    width: width - 100,
  },
  dropdown: {
    height: 55,
    marginTop: 10,
    backgroundColor: '#323232',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#c7c7c7',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  selectedStyle: {
    borderRadius: 12,
    backgroundColor: '#00f9f9',
  },
});
export {styles};
