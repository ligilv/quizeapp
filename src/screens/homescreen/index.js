import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {API_URL, API_TOKEN} from '@env';
import {useSelector, useDispatch} from 'react-redux';
import {incrementCounter} from '../../redux/actions/counterAction';
const HomeScreen = () => {
  // console.log(API_URL);
  const state = useSelector(state => state);
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
        {state.counter.count}
      </Text>

      <Text style={{fontSize: 25}}>What would you like to do?</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
