import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const sampleData = {
  1: 'correct',
  2: 'incorrect',
  3: 'correct',
  4: 'correct',
  5: 'correct',
  6: 'correct',
  7: 'correct',
  8: 'correct',
  9: 'correct',
  10: 'correct',
  11: 'correct',
  12: 'correct',
  13: 'correct',
  14: 'correct',
  15: 'correct',
  16: 'correct',
  17: 'correct',
  18: 'incorrect',
  19: 'incorrect',
  20: 'correct',
  21: 'correct',
  22: 'correct',
  23: 'correct',
  24: 'incorrect',
  25: 'correct',
  26: 'correct',
  27: 'correct',
  28: 'correct',
  29: 'correct',
  30: 'incorrect',
};

const exit = require('../../../../assets/image/exit.png');

const CbtGrade = ({ navigation, route }) => {
  const { subject, type } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-wh">
      <View className="items-end justify-end flex-row space-x-4 p-6">
        <TouchableOpacity className="bg-blue w-28 h-10 rounded-lg justify-center items-center">
          <Text className="text-wh font-bold text-lg">오답 보기</Text>
        </TouchableOpacity>
        <Image source={exit} />
      </View>
      <View className="px-10">
        <Text className="text-3xl">
          {subject} {type} 점수는
        </Text>
        <Text className="text-3xl">
          <Text className="text-blue font-bold">score</Text> 입니다
        </Text>
      </View>
      <ScrollView className="py-10">
        <View className="flex justify-center rounded-lg bg-lightGray w-3/4 h-auto mx-auto p-4">
          <Text className="text-xl text-center mb-10 font-bold">
            [시험 결과]
          </Text>
          <View className="flex flex-row justify-between">
            {[0, 1, 2].map((col) => (
              <View
                key={col}
                className={`flex-1 ${col !== 2 ? 'border-r border-gray' : ''}`}
              >
                {Array.from({ length: 10 }, (_, i) => {
                  const questionNumber = col * 10 + i + 1;
                  const status = sampleData[questionNumber];
                  return (
                    <View
                      key={questionNumber}
                      className="flex flex-row items-center justify-evenly mb-2"
                    >
                      <Text className="text-lg text-black">
                        {questionNumber}
                      </Text>
                      <Text
                        className={`text-lg font-bold ${status === 'correct' ? 'text-blue' : 'text-redd'}`}
                      >
                        {status === 'correct' ? 'O' : 'X'}
                      </Text>
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CbtGrade;
