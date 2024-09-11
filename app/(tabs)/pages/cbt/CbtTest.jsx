import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import ShowExitAlert from '../../../../components/exit/ShowExitAlert';
import ShowSaveAlert from '../../../../components/save/ShowSaveAlert'; // 수정된 ShowSaveAlert 가져오기

const { width, height } = Dimensions.get('window');

const record = require('../../../../assets/image/record.png');
const unfilled_star = require('../../../../assets/image/unfilled_star.png');
const filled_star = require('../../../../assets/image/filled_star.png');
const exit = require('../../../../assets/image/exit.png');
const explanation_img = require('../../../../assets/image/question/55-18.png');

const sampleData = {
  question:
    '18. (주)KITA는 베트남의 A업체로부터 화장품을 개당 USD 100(CIF 가격)에 1,000개를 수입하였다. 다음 조건에서 관세법령에 규정된 내용으로 잘못된 것은? (다른 고려사항은 없다)',
  explanation: explanation_img,
  options: [
    '①  우리나라에서 이행되는 수출입 등 대외무역행위는 기본적으로 대외무역법을 적용한다.',
    '②  자유롭고 공정한 무역 원칙에 기반한 물품의 수출입은 어떤 경우에도 제한할 수 없다.',
    '③  관계 행정기관의 장은 해당 법률에 따른 물품의 수출·수입요령이 그 시행일 전에 공고될 수 있도록 산업통상자원부장관에게 제출하여야 한다.',
    '④  관계 행정기관에서 타법을 통해 대외무역법의 적용을 배제하거나 물품 등의 수출입을 제한하는 법령 등을 제정하려면 산업통상자원부장관과 협의해야 한다.',
  ],
};

const CbtTest = ({ navigation, route }) => {
  const { subject, type } = route.params;
  const [isSaved, setIsSaved] = useState(false); // 저장 상태 관리

  const handleExit = () => {
    navigation.navigate('Home');
  };

  const handleSave = () => {
    setIsSaved(true); // 저장 상태로 변경
  };

  const handleUnsave = () => {
    setIsSaved(false); // 저장 취소 상태로 변경
  };

  return (
    <SafeAreaView className="flex-1 bg-wh">
      <View>
        <View className="p-6 flex-row justify-between items-center">
          <View className="bg-blue w-32 rounded-xl h-12 flex-row justify-evenly items-center ">
            <Image source={record} className="w-6 h-6 mr-2" />
            <Text className="text-wh text-xl">time</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity
              onPress={() => ShowSaveAlert(isSaved, handleSave, handleUnsave)}
            >
              <Image
                className="w-12 h-12"
                source={isSaved ? filled_star : unfilled_star} // 저장 상태에 따라 이미지 변경
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ShowExitAlert(handleExit)}>
              <Image source={exit} />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="px-6 text-xl text-blue font-bold">
          {subject} {type}
        </Text>
        <View>
          <Text className="p-6 text-xl">{sampleData.question}</Text>
        </View>
        <ScrollView className="flex-grow">
          <View style={{ height: height * 0.4 }}>
            <Image
              source={sampleData.explanation}
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
            />
          </View>
          {sampleData.options.map((option, index) => (
            <View key={index} className="px-6 py-4">
              <Text className="text-lg">{option}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CbtTest;
