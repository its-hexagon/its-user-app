import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const record = require('../../../../assets/image/record.png');
const star = require('../../../../assets/image/star.png');
const exit = require('../../../../assets/image/exit.png');

const sampleData = {
  question: '1. 우리나라 대외무역법의 규정에 관한 설명으로 잘못된 것은?',
  options: [
    '①  우리나라에서 이행되는 수출입 등 대외무역행위는 기본적으로 대외무역법을 적용한다.',
    '②  자유롭고 공정한 무역 원칙에 기반한 물품의 수출입은 어떤 경우에도 제한할 수 없다.',
    '③  관계 행정기관의 장은 해당 법률에 따른 물품의 수출·수입요령이 그 시행일 전에 공고될 수 있도록 산업통상자원부장관에게 제출하여야 한다.',
    '④  관계 행정기관에서 타법을 통해 대외무역법의 적용을 배제하거나 물품 등의 수출입을 제한하는 법령 등을 제정하려면 산업통상자원부장관과 협의해야 한다.',
  ],
};

const CbtTest = ({ navigation, route }) => {
  const { subject, type } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-wh">
      <View>
        <View className="p-6 flex-row justify-between items-center">
          <View className="bg-blue w-32 rounded-xl h-12 flex-row justify-evenly items-center ">
            <Image source={record} className="w-6 h-6 mr-2" />
            <Text className="text-wh text-xl">time</Text>
          </View>
          <View className="flex-row space-x-2">
            <Image source={star} />
            <Image source={exit} />
          </View>
        </View>
        <Text className="px-6 text-xl text-blue font-bold">
          {subject} {type}
        </Text>
        <ScrollView>
          <Text className="p-6 text-2xl">{sampleData.question}</Text>
          {sampleData.options.map((option, index) => (
            <View key={index} className="px-6 py-4">
              <Text className="text-lg">{option}</Text>
            </View>
          ))}
          <View className="flex-row justify-between px-6">
            <TouchableOpacity className="bg-blue w-28 h-12 rounded-lg justify-center items-center">
              <Text className="text-wh text-xl">이전 문제</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue w-28 h-12 rounded-lg justify-center items-center">
              <Text className="text-wh text-xl">다음 문제</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CbtTest;
