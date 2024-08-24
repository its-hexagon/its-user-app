import React from 'react';
import { Text, View, StatusBar, SafeAreaView, Image } from 'react-native';

const doubleArrow = require('../../../../assets/image/doubleArrow.png');

const SelectSubject = () => {
  return (
    <SafeAreaView className="bg-wh flex-1">
      <StatusBar style="dark" />
      <View className="items-center mt-20">
        <Text className="text-3xl font-bold">CBT</Text>
        <Text className="text-3xl font-bold">모의고사 풀기</Text>
      </View>
      <Text className="text-center mt-10 text-lg text-gray">
        과목과 문제 유형을 선택하세요
      </Text>
      <View className="px-10 mt-16">
        <View className="border-y flex-row items-center">
          <Text className="text-2xl font-bold pt-4 pb-4 ml-4">무역 규범</Text>
          <Image source={doubleArrow} />
        </View>
        <View className="border-b flex-row items-center">
          <Text className="text-2xl font-bold py-4 ml-4">무역 결제</Text>
          <Image source={doubleArrow} />
        </View>
        <View className="border-b flex-row items-center">
          <Text className="text-2xl font-bold py-4 ml-4">무역 계약</Text>
          <Image source={doubleArrow} />
        </View>
        <View className="border-b flex-row items-center">
          <Text className="text-2xl font-bold py-4 ml-4">무역 영어</Text>
          <Image source={doubleArrow} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectSubject;
