import React from 'react';
import {Dimensions} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const {width, height} = Dimensions.get('screen');
const VideoFrame = ({videoKey}) => {
  return (
    <YoutubePlayer
      height={height / 3}
      style={{zIndex: 0}}
      // play={playing}
      videoId={videoKey}
      // onChangeState={onStateChange}
    />
  );
};

export default VideoFrame;
