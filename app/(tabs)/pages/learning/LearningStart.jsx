import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';

const LearningStartImg = require('../../../../assets/image/learningStart.png');

const LearningStart = ({ route, navigation }) => {
  const { minorSubject } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LearningTest', { subject: minorSubject });
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-wh justify-center">
      <View className="items-center pb-16">
        <Image source={LearningStartImg} />
      </View>
      <View className="space-y-4">
        <Text className="text-3xl text-blue text-center font-bold">
          {minorSubject}
        </Text>
        <Text className="text-2xl text-center font-bold">
          학습 모드를 시작합니다
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LearningStart;
