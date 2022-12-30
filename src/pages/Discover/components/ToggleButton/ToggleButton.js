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
            backgroundColor: timeRange === 'day' ? '#ff685d' : 'gray',
          },
        ]}>
        <Text
          style={{
            color: '#ddd',
            fontSize: 13,
            paddingBottom: 5,
            fontWeight: 'bold',
          }}>
          Day
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={rightHandle}
        style={[
          styles.rightButton,
          {
            backgroundColor: timeRange !== 'day' ? '#ff685d' : 'gray',
          },
        ]}>
        <Text
          style={{
            color: '#ddd',
            fontSize: 12,
            paddingBottom: 2,
            fontWeight: 'bold',
          }}>
          Week
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;
