import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const SelectLearningMinor = ({ navigation, route }) => {
  const { major, minor } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-wh">
      <Text className="text-3xl font-bold text-center pt-16 pb-10">
        1과목 - {major}
      </Text>
      <Text className="text-center text-xl text-gray pb-16">
        세부과목을 선택하세요
      </Text>
      <View className="items-center space-y-16">
        {minor.map((subject, index) => (
          <TouchableOpacity
            key={index}
            className="bg-blue rounded-lg shadow-lg w-3/4"
            onPress={() => {
              navigation.navigate('LearningStart', { minorSubject: subject });
            }}
          >
            <Text className="text-wh text-2xl text-center py-4">
              {subject} 150제
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SelectLearningMinor;
