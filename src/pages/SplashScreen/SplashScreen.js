import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Video from 'react-native-video';
import splash from '../../assets/splash.mp4';
const SplashScreen = () => {
  return (
    <SafeAreaView>
      <Video
        resizeMode="cover"
        source={splash} // Can be a URL or a local file.
        style={styles.backgroundVideo}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
});
export default SplashScreen;
