import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const SelectReviewMajor = () => {
  return (
    <SafeAreaView className="bg-wh flex-1">
      <Text className="text-3xl font-bold text-center pt-16 pb-10">
        오답노트 보기
      </Text>
      <Text className="text-gray text-center text-lg pb-16">
        오답노트를 선택하세요
      </Text>
      <View className="space-y-10 items-center">
        <TouchableOpacity className="bg-blue rounded-xl shadow-lg w-3/4 justify-center">
          <Text className="text-wh text-2xl text-center py-4">무역 규범</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue rounded-xl shadow-lg  w-3/4 justify-center">
          <Text className="text-wh text-2xl text-center py-4">무역 결제</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue rounded-xl shadow-lg  w-3/4 justify-center">
          <Text className="text-wh text-2xl text-center py-4 ">무역 계약</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue rounded-xl shadow-lg  w-3/4 justify-center">
          <Text className="text-wh text-2xl text-center py-4 ">무역 영어</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectReviewMajor;
