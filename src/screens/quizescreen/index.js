import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {quizedata} from '../../data/data';
import QuestionDisplay from './questionDisplay';
const QuizeScreen = () => {
  // const quizeData = useMemo(() => quizedata, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [tStatus, setTstatus] = useState(true);
  const [timers, setTimer] = useState(0);
  const toNext = () => {
    if (currentQuestion < quizedata.length - 1) {
      console.log('in to next', currentQuestion);
      setCurrentQuestion(currentQuestion + 1);
      setTimer(0);
    } else {
      console.log('out');
      setTstatus(false);
    }
  };

  useEffect(() => {
    let timer;
    if (tStatus) {
      timer = setTimeout(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    } else {
      clearTimeout(timer);
    }
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
        <Text style={{color: 'red'}}>Time: {timers}</Text>
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
