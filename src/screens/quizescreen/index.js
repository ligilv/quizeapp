import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {quizedata} from '../../data/data';
import QuestionDisplay from './questionDisplay';
const QuizeScreen = () => {
  // const quizeData = useMemo(() => quizedata, []);
  useEffect(() => {
    console.log('quizedata');
  }, [quizedata]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timers, setTimer] = useState(0);
  const toNext = useCallback(() => {
    if (currentQuestion < quizedata.length - 1) {
      console.log('in to next', currentQuestion);
      setCurrentQuestion(currentQuestion + 1);
      setTimer(0);
    } else {
      // setCurrentQuestion(0);
      console.log('out');
    }
  });
  // function Timer() {
  //   setTimeout(() => {
  //     toNext();
  //   }, 3000);
  // Timer();
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [toNext]);

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
        <Text style={{color: 'red'}}>Time Left 0:{timers}</Text>
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
