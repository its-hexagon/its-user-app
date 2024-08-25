import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

const cbtReview = require('../../../../assets/image/cbtTest.png');
const learningReview = require('../../../../assets/image/learningReview.png');

const SelectReviewType = ({ navigation, route }) => {
  const { minorSubject } = route.params;

  return (
    <SafeAreaView className="bg-wh flex-1">
      <Text className="text-3xl text-center font-bold pt-16 pb-10">
        {minorSubject} 오답노트
      </Text>
      <Text className="text-center text-gray text-lg pb-24">
        세부과목을 선택해주세요
      </Text>
      <View className="flex-row justify-evenly">
        <TouchableOpacity className="bg-blue rounded-xl py-4 shadow-lg">
          <Image className="w-40 h-40" source={cbtReview} />
          <Text className="text-xl font-bold text-wh text-center">
            모의고사
          </Text>
          <Text className="text-xl font-bold text-wh text-center">
            오답노트
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue rounded-xl py-4 shadow-lg">
          <Image className="w-40 h-40" source={learningReview} />
          <Text className="text-xl font-bold text-wh text-center">
            학습모드
          </Text>
          <Text className="text-xl font-bold text-wh text-center">
            오답노트
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectReviewType;
