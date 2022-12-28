import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ToggleButton.style';
const ToggleButton = ({onPress, timeRange, setTimeRange}) => {
  const leftHandle = () => {
    setTimeRange('day');
    onPress();
  };
  const rightHandle = () => {
    setTimeRange('week');
    onPress();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={leftHandle}
        style={[
          styles.leftButton,
          {
            backgroundColor: timeRange === 'day' ? '#076666' : 'gray',
            borderWidth: timeRange === 'day' ? 0 : 2,
            borderColor: '#ddd',
          },
        ]}>
        <Text style={{color: '#ddd'}}>Day</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={rightHandle}
        style={[
          styles.rightButton,
          {
            backgroundColor: timeRange !== 'day' ? '#076666' : 'gray',
            borderWidth: timeRange !== 'day' ? 0 : 2,
            borderColor: '#ddd',
          },
        ]}>
        <Text style={{color: '#ddd'}}>Week</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;
