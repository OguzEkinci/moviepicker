import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'pink',
    backgroundColor: '#a0587e',
    textAlign: 'right',
    fontSize: 18,
    lineHeight: 40,
    width: 130,
    padding: 4,
    paddingRight: 12,
    marginBottom: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  headerView: {
    paddingTop: 30,
    paddingBottom: 4,
    borderRadius: 30,
    marginRight: 3,
    width: width,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
export default styles;
