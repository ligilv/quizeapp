import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {quizedata} from '../../data/data';

const QuestionDisplay = ({currentQuestion, toNext}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentQuestionData, setCurrentQuestionData] = useState({});
  const [answered, setAnswered] = useState(true);

  useEffect(() => {
    setCurrentQuestionData(currentQuestion);
    // console.log(currentQuestion);
    toNextQuestion();
  }, [currentQuestion]);
  const onSelectAnswer = (item, index) => {
    setAnswered(false);
    if (item.optionText == currentQuestionData?.correct) {
      setAnswered(true);

      const newOptions = currentQuestion.options.map((item, i) => {
        if (i == index) {
          item.color = '#6CC4A1';
        }
      });
      setCurrentQuestionData(prev => ({
        ...prev,
        options: [...prev.options, newOptions],
      }));
      setTimeout(() => {
        setAnswered(true);

        toNext();
      }, 1000);
    } else {
      // console.log(currentQuestion);
      const newOptions = currentQuestion.options.map((item, i) => {
        // console.log(item);
        if (i == index) {
          item.color = '#F94C66';
          console.log(currentQuestion);
        }
      });
      setCurrentQuestionData(prev => ({
        ...prev,
        options: [...prev.options, newOptions],
      }));
      setTimeout(() => {
        setAnswered(true);

        toNext();
      }, 1000);
    }
  };

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
                key={item.optionOrder}
                onPress={answered ? () => onSelectAnswer(item, index) : null}
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
