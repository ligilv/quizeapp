import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {quizedata} from '../../data/data';
import QuestionDisplay from './questionDisplay';
const QuizeScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [quize, setQuize] = useState(quizedata);

  const toNext = () => {
    // console.log(currentQuestion, quizedata.length);
    if (currentQuestion < quizedata.length - 1) {
      console.log('in to next', currentQuestion);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      console.log('out');
    }
  };
  // Timer();
  // function Timer() {
  //   setTimeout(() => {
  //     toNext();
  //   }, 3000);
  // }
  return (
    <View>
      <View>
        <Text style={{textAlign: 'center'}}>Quiz App</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 20,
        }}>
        <Text>Question {currentQuestion + 1}/10</Text>
        <Text style={{color: 'red'}}>Time Left -0:30</Text>
      </View>

      <QuestionDisplay
        currentQuestion={quizedata[currentQuestion]}
        toNext={toNext}
      />
    </View>
  );
};

export default QuizeScreen;

const styles = StyleSheet.create({});
