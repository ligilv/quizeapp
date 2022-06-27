import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {quizedata} from '../../data/data';

const QuestionDisplay = ({currentQuestion, toNext}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentQuestionData, setCurrentQuestionData] = useState({});
  const [answered, setAnswered] = useState(true);

  useEffect(() => {
    setCurrentQuestionData(currentQuestion);
    toNextQuestion();
  }, [currentQuestion]);
  const onSelectAnswer = (item, index) => {
    setAnswered(false);
    if (item.optionText == currentQuestionData?.correct) {
      setAnswered(true);

      const newOptions = currentQuestion.options.map((item, i) => {
        if (i == index) {
          return {...item, color: '#6CC4A1'};
        } else {
          return {...item};
        }
      });
      ß;
      console.log('newoptions', newOptions);
      setCurrentQuestionData(prev => ({
        ...prev,
        options: [...newOptions],
      }));
      setTimeout(() => {
        setAnswered(true);

        toNext();
      }, 1000);
    } else {
      const newOptions = currentQuestion.options.map((item, i) => {
        if (i == index) {
          return {...item, color: '#F94C66'};
        } else {
          return {...item};
        }
      });
      console.log('newoptions', newOptions);
      setCurrentQuestionData(prev => ({
        ...prev,
        options: [...newOptions],
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
    <View style={{paddingTop: 20}}>
      <Text>Q) {currentQuestionData?.question}</Text>
      <View style={{alignItems: 'center'}}>
        {currentQuestionData?.options?.map((item, index) => {
          return (
            <View style={{flexDirection: 'row'}} key={item.optionOrder}>
              <View style={{justifyContent: 'center', padding: 10}}>
                <Text style={{textAlign: 'center'}}>{item.optionOrder}</Text>
              </View>
              <TouchableOpacity
                key={item.optionOrder}
                onPress={answered ? () => onSelectAnswer(item, index) : null}
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
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
