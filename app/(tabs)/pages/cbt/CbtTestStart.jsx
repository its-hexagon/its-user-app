import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

const cbtTest = require('../../../../assets/image/cbtTest.png');

const CbtTestStart = ({ navigation, route }) => {
  const { subject, type } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('CbtTest', { subject: subject, type: type });
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 bg-wh justify-center">
      <View className="items-center pb-16">
        <Image source={cbtTest} />
      </View>
      <Text className="text-center text-3xl font-bold mb-4 text-blue">
        {subject}
      </Text>
      <Text className="text-center text-2xl font-bold">
        모의고사
        <Text className="text-blue">{type}</Text>을 시작합니다
      </Text>
    </View>
  );
};

export default CbtTestStart;
