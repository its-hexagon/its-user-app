import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SelectLearningMajor = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-wh flex-1">
      <Text className="text-3xl font-bold text-center pt-16 pb-10">
        과목별 학습 600제
      </Text>
      <Text className="text-center text-xl text-gray pb-10">
        과목을 선택하세요
      </Text>
      <View className="items-center space-y-10">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('LearningMinor', {
              major: '무역 규범',
              minor: ['대외무역법', '통관/관세환급', 'FTA 특례법'],
            })
          }
          className="bg-blue rounded-lg shadow-lg"
        >
          <Text className="text-wh text-2xl text-center py-4 px-12">
            무역 규범 150제
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue rounded-lg shadow-lg">
          <Text className="text-wh text-2xl text-center py-4 px-12">
            무역 결제 150제
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue rounded-lg shadow-lg">
          <Text className="text-wh text-2xl text-center py-4 px-12">
            무역 계약 150제
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue rounded-lg shadow-lg">
          <Text className="text-wh text-2xl text-center py-4 px-12">
            무역 영어 150제
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectLearningMajor;
