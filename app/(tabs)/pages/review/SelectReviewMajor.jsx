import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useMajor, useMinor } from '@/api/user.api';

const SelectReviewMajor = ({ navigation }) => {
  const { data: major } = useMajor();
  const { data: minor } = useMinor();

  const getMinorsByMajorId = (majorId) => {
    return minor?.filter((minor) => minor.majorId === majorId);
  };

  return (
    <SafeAreaView className="bg-wh flex-1">
      <Text className="text-3xl font-bold text-center pt-16 pb-10">
        오답노트 보기
      </Text>
      <Text className="text-gray text-center text-lg pb-16">
        오답노트를 선택하세요
      </Text>
      <View className="space-y-10 items-center">
        {major?.map((major) => (
          <TouchableOpacity
            key={major.majorId}
            onPress={() =>
              navigation.navigate('ReviewMinor', {
                major: major.majorName,
                minor: getMinorsByMajorId(major.majorId).map(
                  (m) => m.minorName,
                ),
              })
            }
            className="bg-blue rounded-xl shadow-lg  w-3/4 justify-center"
          >
            <Text className="text-wh text-2xl text-center py-4">
              {major.majorName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SelectReviewMajor;
