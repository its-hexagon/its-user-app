import React from 'react';
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useMajor } from '../../../../api/user.api';
const doubleArrow = require('../../../../assets/image/doubleArrow.png');

const SelectCbtSubject = ({ navigation }) => {
  const { data: major } = useMajor();

  return (
    <SafeAreaView className="bg-wh flex-1">
      <StatusBar style="dark" />
      <View className="items-center mt-20">
        <Text className="text-3xl font-bold">CBT</Text>
        <Text className="text-3xl font-bold">모의고사 풀기</Text>
      </View>
      <Text className="text-center mt-10 text-xl text-gray">
        과목과 문제 유형을 선택하세요
      </Text>
      <View className="px-10 mt-16">
        {major?.map((subject) => (
          <TouchableOpacity
            key={subject.majorId}
            onPress={() =>
              navigation.navigate('CbtType', { subject: subject.majorName })
            }
            className="border-b flex-row items-center"
          >
            <View className="w-3 h-3 ml-3 bg-blue"></View>
            <Text className="text-2xl font-bold py-4 ml-4">
              {subject.majorName}
            </Text>
            <Image source={doubleArrow} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SelectCbtSubject;
