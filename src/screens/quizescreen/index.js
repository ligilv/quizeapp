import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {quizedata} from '../../data/data';
import QuestionDisplay from './questionDisplay';
const QuizeScreen = () => {
  // const quizeData = useMemo(() => quizedata, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [tStatus, setTstatus] = useState(true);
  const [timers, setTimer] = useState(11);
  const toNext = () => {
    console.log('current', currentQuestion);
    if (currentQuestion < quizedata.length - 1) {
      setTstatus(true);
      console.log('in to next', currentQuestion);
      setCurrentQuestion(currentQuestion + 1);
      console.log('after', currentQuestion);
      setTimer(11);
    } else {
      console.log('out');
      setTstatus(false);
    }
  };

  useEffect(() => {
    console.log('timer running');
    let timer;

    if (timers == 0) {
      console.log('0 sec');
      setTstatus(false);
      toNext();
    } else {
      if (tStatus) {
        timer = setInterval(() => {
          setTimer(prev => prev - 1);
        }, 1000);
      } else {
        clearInterval(timer);
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [toNext]);

  return (
    <View style={{padding: 10, backgroundColor: '#C2DED1', flex: 1}}>
      <View>
        <Text style={{textAlign: 'center'}}>Quiz App</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 20,
        }}>
        <Text>
          Question {currentQuestion + 1}/{quizedata.length}
        </Text>
        <Text style={{color: 'red', paddingHorizontal: 20}}>
          Time: {timers}
        </Text>
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
