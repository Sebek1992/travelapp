/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { StyleSheet } from 'react-native';
import Home from './src/screens/Home';

function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeView: {
    backgroundColor: 'red',
  },
  view: {
    backgroundColor: 'yellow',
  },
});

export default App;
