import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMajor, useMinor } from '../../../../api/user.api';

const SelectLearningMajor = ({ navigation }) => {
  const { data: major } = useMajor();
  const { data: minor } = useMinor();

  const getMinorsByMajorId = (majorId) => {
    return minor?.filter((minor) => minor.majorId === majorId);
  };

  return (
    <SafeAreaView className="bg-wh flex-1">
      <Text className="text-3xl font-bold text-center pt-16 pb-10">
        과목별 학습 600제
      </Text>
      <Text className="text-center text-xl text-gray pb-10">
        과목을 선택하세요
      </Text>
      <View className="items-center space-y-10">
        {major?.map((major) => (
          <TouchableOpacity
            key={major.majorId}
            onPress={() =>
              navigation.navigate('LearningMinor', {
                major: major.majorName,
                minor: getMinorsByMajorId(major.majorId).map(
                  (m) => m.minorName,
                ),
              })
            }
            className="bg-blue rounded-lg shadow-lg mb-4"
          >
            <Text className="text-wh text-2xl text-center py-4 px-12">
              {major.majorName} 150제
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SelectLearningMajor;
