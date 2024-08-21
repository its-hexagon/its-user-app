/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const arrow = require('../../../assets/image/arrow.png');

const SelectMode = ({ navigation }) => {
  return (
    <View className="bg-wh flex-1">
      <View className="flex items-center pt-20">
        <Text className="text-3xl font-bold">국제 무역사</Text>
        <Text className="text-3xl font-bold">독학으로 끝내기</Text>
      </View>
      <View className="mt-10 flex items-center">
        <Text className="text-lg">학습 종류를 선택하세요</Text>
        <Image source={arrow} className="mt-6 mb-10" />
      </View>
      <View className="flex justify-center items-center space-y-16">
        <TouchableOpacity className="bg-blue w-5/6 items-center rounded-xl shadow-lg">
          <Text className="text-wh text-xl py-5">CBT 모의고사 풀기</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue w-5/6 items-center rounded-xl shadow-lg">
          <Text className="text-wh text-xl py-5">과목별 학습 모드</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue w-5/6 items-center rounded-xl shadow-lg">
          <Text className="text-wh text-xl py-5">오답노트 보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectMode;
