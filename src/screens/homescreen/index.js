import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeScreen = () => {
  return (
    <View>
      <Button title="Set Questions" />
      <Button title="Answer them" />
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={this.loginWithFacebook}>
        Login with Facebook
      </Icon.Button>
      <Text style={{fontFamily: 'YatraOne-Regular', fontSize: 25}}>
        What would you like to do?
      </Text>
      <Text style={{fontSize: 25}}>What would you like to do?</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
