import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 15,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export {styles};
