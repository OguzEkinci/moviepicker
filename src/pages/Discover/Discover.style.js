import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundGradient: 'vertical',
    backgroundGradientTop: '#333333',
    backgroundGradientBottom: '#666666',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  headerView: {
    paddingTop: 30,
    paddingBottom: 4,
    paddingLeft: 10,
    borderRadius: 30,
    marginLeft: 3,
    marginRight: 3,
    flexDirection: 'row',
  },
});
export {styles};
