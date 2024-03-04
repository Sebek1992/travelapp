/* eslint-disable react/prop-types */
import React from 'react';
import { Text } from 'react-native';
import styles from '../Title/styles';

function Title({ text, style }) {
  return <Text style={[styles.title, style]}>{text}</Text>;
}

export default Title;
