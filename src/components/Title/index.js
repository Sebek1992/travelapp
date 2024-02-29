import React, { useState } from 'react';
import { Text } from 'react-native';
import styles from './styles';

function Title({ text }) {
  const [stateText, setText] = useState('Default state');

  const onTextPress = () => {
    setText('Update state');
  };

  return (
    <Text onPress={onTextPress} style={styles.title}>
      {stateText}
    </Text>
  );
}

export default Title;
