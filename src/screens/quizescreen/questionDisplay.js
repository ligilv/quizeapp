import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {quizedata} from '../../data/data';

const QuestionDisplay = ({currentQuestion, toNext}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentQuestionData, setCurrentQuestionData] = useState({});
  useEffect(() => {
    setCurrentQuestionData(currentQuestion);
  }, [currentQuestion]);
  const onSelectAnswer = (item, index) => {
    // console.log(item, index);

    if (item.optionText == currentQuestionData?.correct) {
      toNext();
      console.log('next triggered');
    } else {
      console.log('wrong');
    }
  };
  useEffect(() => {
    toNextQuestion();
    return () => {
      console.log('cleanuo');
      clearTimeout(toNextQuestion());
    };
  }, [toNext]);
  function toNextQuestion() {
    console.log('started');
    setTimeout(() => {
      toNext();
    }, 30000);
  }
  return (
    <View>
      <Text>{currentQuestionData?.question}</Text>
      <View style={{alignItems: 'center'}}>
        {currentQuestionData?.options?.map((item, index) => {
          return (
            <View style={{flexDirection: 'row'}} key={item.optionOrder}>
              <Text>{item.optionOrder}</Text>
              <TouchableOpacity
                onPress={() => onSelectAnswer(item, index)}
                style={{
                  backgroundColor: item.color,
                  width: '80%',
                  borderRadius: 10,
                  paddingVertical: 5,
                  marginTop: 10,
                  padding: 5,
                }}>
                <Text>{item.optionText}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default QuestionDisplay;

const styles = StyleSheet.create({});
