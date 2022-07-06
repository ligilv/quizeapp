import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeScreen = () => {
  return (
    <View>
      <Text>What would you like to do?</Text>
      <Button title="Set Questions" />
      <Button title="Answer them" />
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={this.loginWithFacebook}>
        Login with Facebook
      </Icon.Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
