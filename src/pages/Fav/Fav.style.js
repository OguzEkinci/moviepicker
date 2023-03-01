import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  imageBackground: {
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#c7c7c7',
    backgroundColor: '#323232',
    textAlign: 'right',
    fontSize: 18,
    lineHeight: 40,
    padding: 4,
    paddingRight: 12,
    paddingLeft: 12,
    marginBottom: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerView: {
    paddingTop: 30,
    paddingBottom: 4,
    borderRadius: 30,
    marginRight: 3,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default styles;
