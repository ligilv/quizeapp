/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FetchData from './src/screens/FetchData';
import QuizeScreen from './src/screens/quizescreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <FetchData /> */}
      <QuizeScreen />
      {/* <TestFetch /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
