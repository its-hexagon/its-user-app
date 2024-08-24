import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

const SelectType = ({ route }) => {
  const { subject } = route.params; // Get the subject from route parameters

  return (
    <SafeAreaView className="flex-1 bg-wh">
      <View className="items-center mt-20">
        <Text className="text-3xl font-bold">모의고사 {subject} 30제</Text>
      </View>
      <Text className="text-center py-10 text-xl text-gray">
        문제 유형을 선택하세요
      </Text>
      <View className="items-center space-y-6">
        <View className="flex-row space-x-8">
          <TouchableOpacity className="bg-blue rounded-lg w-32 h-48 items-center justify-center">
            <Text className="text-wh text-2xl font-bold">유형 A</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue rounded-lg w-32 h-48 items-center justify-center">
            <Text className="text-wh text-2xl font-bold">유형 B</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row space-x-8">
          <TouchableOpacity className="bg-blue rounded-lg w-32 h-48 items-center justify-center">
            <Text className="text-wh text-2xl font-bold">유형 C</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue rounded-lg w-32 h-48 items-center justify-center">
            <Text className="text-wh text-2xl font-bold">유형 D</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectType;
