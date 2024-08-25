import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const SelectReviewMinor = ({ navigation, route }) => {
  const { major, minor } = route.params;
  return (
    <SafeAreaView className="bg-wh flex-1">
      <Text className="text-3xl font-bold text-center pt-16 pb-10">
        {major} 오답노트
      </Text>
      <Text className="text-lg text-center text-gray pb-16">
        세부과목을 선택하세요
      </Text>
      <View className="items-center space-y-16">
        {minor.map((subject, index) => (
          <TouchableOpacity
            key={index}
            className="bg-blue rounded-lg shadow-lg w-3/4"
            onPress={() => {
              navigation.navigate('ReviewType', { minorSubject: subject });
            }}
          >
            <Text className="text-wh text-2xl text-center py-4">
              {subject} 오답노트
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SelectReviewMinor;
