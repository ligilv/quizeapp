/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
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
import RootNavigation from './src/navigation';
import FetchData from './src/screens/FetchData';
import HomeScreen from './src/screens/homescreen';
import QuizeScreen from './src/screens/quizescreen';
import {persistor, store} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          {/* <FetchData /> */}
          {/* <QuizeScreen /> */}
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
          {/* <TestFetch /> */}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
