import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ToggleButton.style';
import I18n from '../../../../assets/util/lang/_i18n';
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
            backgroundColor: timeRange === 'day' ? '#00f9f9' : '#c7c7c7',
          },
        ]}>
        <Text
          style={{
            color: '#323232',
            fontSize: 12,
            fontWeight: 'bold',
            width: 45,
            textAlign: 'center',
          }}>
          {I18n.t('day')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={rightHandle}
        style={[
          styles.rightButton,
          {
            backgroundColor: timeRange !== 'day' ? '#00f9f9' : '#c7c7c7',
          },
        ]}>
        <Text
          style={{
            color: '#323232',
            fontSize: 12,
            width: 45,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {I18n.t('week')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;
