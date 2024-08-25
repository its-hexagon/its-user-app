import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal, // 기본 Modal 컴포넌트 사용
} from 'react-native';

const star = require('../../../../assets/image/star.png');
const exit = require('../../../../assets/image/exit.png');
const checkMarkRed = require('../../../../assets/image/checkMarkRed.png');
const checkMarkGreen = require('../../../../assets/image/checkMarkGreen.png');

const sampleData = {
  question: '1. 우리나라 대외무역법의 규정에 관한 설명으로 잘못된 것은?',
  options: [
    '① 우리나라에서 이행되는 수출입 등 대외무역행위는 기본적으로 대외무역법을 적용한다.',
    '② 자유롭고 공정한 무역 원칙에 기반한 물품의 수출입은 어떤 경우에도 제한할 수 없다.',
    '③ 관계 행정기관의 장은 해당 법률에 따른 물품의 수출·수입요령이 그 시행일 전에 공고될 수 있도록 산업통상자원부장관에게 제출하여야 한다.',
    '④ 관계 행정기관에서 타법을 통해 대외무역법의 적용을 배제하거나 물품 등의 수출입을 제한하는 법령 등을 제정하려면 산업통상자원부장관과 협의해야 한다.',
  ],
  correctAnswer:
    '② 자유롭고 공정한 무역 원칙에 기반한 물품의 수출입은 어떤 경우에도 제한할 수 없다.',
  explanation:
    '우리나라의 대외무역법은 자유롭고 공정한 무역 원칙에 기반한 물품의 수출입을 조장하는 것을 원칙으로 하나, 법 3조 2항에 따라 자유롭고 공정한 무역 원칙에 기반한 물품의 수출입이라도 대외무역법이나 다른 법률 등에 따라 제한할 수 있다.',
};

const LearningTest = ({ route }) => {
  const { subject } = route.params;
  const [isModalVisible, setModalVisible] = useState(false);

  const handleNextQuestion = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-wh">
      <View>
        <View className="p-6 flex-row justify-between items-center">
          <View className="bg-blue  rounded-lg flex-row justify-evenly items-center">
            <Text className="text-wh text-base py-1 px-2">Part. {subject}</Text>
          </View>
          <View className="flex-row space-x-2">
            <Image source={star} />
            <Image source={exit} />
          </View>
        </View>
        <Text className="px-6 text-xl text-blue font-bold">
          Part. {subject}
        </Text>
        <ScrollView>
          <Text className="p-6 text-2xl">{sampleData.question}</Text>
          {sampleData.options.map((option, index) => (
            <View key={index} className="px-6 py-4">
              <Text className="text-lg">{option}</Text>
            </View>
          ))}
          <View className="flex-row justify-between px-6">
            <TouchableOpacity className="bg-blue w-28 h-12 rounded-full justify-center items-center">
              <Text className="text-wh text-xl">이전 문제</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-blue w-28 h-12 rounded-full justify-center items-center"
              onPress={handleNextQuestion}
            >
              <Text className="text-wh text-xl">다음 문제</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Modal 구현 */}
      <Modal
        animationType="none"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <TouchableOpacity
          className="flex-1 justify-center items-center"
          activeOpacity={1} // 배경 클릭을 모달에 전달하지 않도록 설정
          onPress={() => setModalVisible(false)} // 배경을 누르면 모달 닫기
        >
          {/* 배경 view */}
          <View className="absolute top-0 left-0 right-0 bottom-0 bg-blackk opacity-50" />

          {/* 모달 내용 view */}
          <View className="bg-wh rounded-lg w-11/12 pb-10 pt-4 px-6 z-10">
            <View className="items-end">
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text className="text-2xl">x</Text>
              </TouchableOpacity>
            </View>

            <Text className="text-2xl font-bold">정답 및 해설</Text>
            <View className="mt-4 flex-row items-center">
              <Image source={checkMarkRed} className="w-6 h-6 mr-2" />
              <Text className="text-lg">내가 고른 답 ②</Text>
            </View>
            <View className="mt-4 flex-row items-center">
              <Image source={checkMarkGreen} className="w-6 h-6 mr-2" />
              <Text className="text-lg">정답 ②</Text>
            </View>
            <Text className="mt-4 text-lg break-words">
              {sampleData.explanation}
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default LearningTest;
