/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';

const arrow = require('../../../assets/image/arrow.png');
const questionMark = require('../../../assets/image/questionMark.png');
const close = require('../../../assets/image/close.png');

const SelectMode = ({ navigation }) => {
  const [cbtModalVisible, setCbtModalVisible] = useState(false);
  const [practiceModalVisible, setPracticeModalVisible] = useState(false);
  const [reviewModalVisible, setReviewModalVisible] = useState(false);

  return (
    <View className="bg-wh flex-1">
      <View className="flex items-center pt-20">
        <Text className="text-3xl font-bold">국제 무역사</Text>
        <Text className="text-3xl font-bold">독학으로 끝내기</Text>
      </View>
      <View className="mt-10 flex items-center">
        <Text className="text-lg">학습 종류를 선택하세요</Text>
        <Image source={arrow} className="mt-6 mb-10" />
      </View>
      <View className="flex justify-center items-center space-y-16">
        <TouchableOpacity className="bg-blue w-5/6 rounded-xl shadow-lg relative justify-center items-center">
          <TouchableOpacity
            onPress={() => setCbtModalVisible(true)}
            className="absolute top-2 right-2"
          >
            <Image source={questionMark} className="w-6 h-6" />
          </TouchableOpacity>
          <Text className="text-wh text-xl py-5 text-center">
            CBT 모의고사 풀기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue w-5/6 rounded-xl shadow-lg relative justify-center items-center">
          <TouchableOpacity
            onPress={() => setPracticeModalVisible(true)}
            className="absolute top-2 right-2"
          >
            <Image source={questionMark} className="w-6 h-6" />
          </TouchableOpacity>
          <Text className="text-wh text-xl py-5 text-center">
            과목별 학습 모드
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue w-5/6 rounded-xl shadow-lg relative justify-center items-center">
          <TouchableOpacity
            onPress={() => setReviewModalVisible(true)}
            className="absolute top-2 right-2"
          >
            <Image source={questionMark} className="w-6 h-6" />
          </TouchableOpacity>
          <Text className="text-wh text-xl py-5 text-center">
            오답노트 보기
          </Text>
        </TouchableOpacity>
      </View>
      {/* CBT 모달 컴포넌트 */}
      <Modal
        transparent={true}
        animationType="none"
        visible={cbtModalVisible}
        onRequestClose={() => setCbtModalVisible(false)}
      >
        <TouchableOpacity
          className="flex-1 justify-center items-center"
          activeOpacity={1} // 배경 클릭을 모달에 전달하지 않도록 설정
          onPress={() => setCbtModalVisible(false)} // 배경을 누르면 모달 닫기
        >
          {/* 배경 view */}
          <View className="absolute top-0 left-0 right-0 bottom-0 bg-blackk opacity-50" />
          {/* 모달 view */}
          <View className="bg-blue w-4/5 rounded-xl shadow-lg p-4 z-10">
            <TouchableOpacity
              onPress={() => setCbtModalVisible(false)}
              className="absolute top-2 right-2"
            >
              <Image source={close} className="w-6 h-6" />
            </TouchableOpacity>
            <Text className="font-bold text-center text-wh text-2xl py-4">
              CBT 모의고사란?
            </Text>
            <View className="items-center px-4 pb-10">
              <Text className="mt-4 text-wh text-xl">1과목부터 4과목을</Text>
              <Text className="text-wh text-xl">세부과목으로 나누어</Text>
              <Text className="text-wh text-xl">문제를 공부할 수 있는</Text>
              <Text className="text-wh text-xl">학습과정입니다.</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      {/* 학습 모드 모달 컴포넌트 */}
      <Modal
        transparent={true}
        animationType="none"
        visible={practiceModalVisible}
        onRequestClose={() => setPracticeModalVisible(false)}
      >
        <TouchableOpacity
          className="flex-1 justify-center items-center"
          activeOpacity={1} // 배경 클릭을 모달에 전달하지 않도록 설정
          onPress={() => setPracticeModalVisible(false)} // 배경을 누르면 모달 닫기
        >
          {/* 배경 view */}
          <View className="absolute top-0 left-0 right-0 bottom-0 bg-blackk opacity-50" />
          {/* 모달 view */}
          <View className="bg-blue w-4/5 rounded-xl shadow-lg p-4 z-10">
            <TouchableOpacity
              onPress={() => setPracticeModalVisible(false)}
              className="absolute top-2 right-2"
            >
              <Image source={close} className="w-6 h-6" />
            </TouchableOpacity>
            <Text className="font-bold text-center text-wh text-2xl py-4">
              학습 모드란?
            </Text>
            <View className="items-center px-4 pb-10">
              <Text className="mt-4 text-wh text-xl">1과목부터 4과목을</Text>
              <Text className="text-wh text-xl">세부과목으로 나누어</Text>
              <Text className="text-wh text-xl">문제를 공부할 수 있는</Text>
              <Text className="text-wh text-xl">학습과정입니다.</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      {/* 오답노트 모달 컴포넌트 */}
      <Modal
        transparent={true}
        animationType="none"
        visible={reviewModalVisible}
        onRequestClose={() => setReviewModalVisible(false)}
      >
        <TouchableOpacity
          className="flex-1 justify-center items-center"
          activeOpacity={1} // 배경 클릭을 모달에 전달하지 않도록 설정
          onPress={() => setReviewModalVisible(false)} // 배경을 누르면 모달 닫기
        >
          {/* 배경 view */}
          <View className="absolute top-0 left-0 right-0 bottom-0 bg-blackk opacity-50" />
          {/* 모달 view */}
          <View className="bg-blue w-4/5 rounded-xl shadow-lg p-4 z-10">
            <TouchableOpacity
              onPress={() => setReviewModalVisible(false)}
              className="absolute top-2 right-2"
            >
              <Image source={close} className="w-6 h-6" />
            </TouchableOpacity>
            <Text className="font-bold text-center text-wh text-2xl py-4">
              오답노트란?
            </Text>
            <View className="items-center px-4 pb-10">
              <Text className="mt-4 text-wh text-xl">1과목부터 4과목을</Text>
              <Text className="text-wh text-xl">세부과목으로 나누어</Text>
              <Text className="text-wh text-xl">문제를 공부할 수 있는</Text>
              <Text className="text-wh text-xl">학습과정입니다.</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default SelectMode;
