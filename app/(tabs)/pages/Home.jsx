/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, View, Text, StatusBar, Linking } from 'react-native';
import { useExamSchedule } from '../../../api/user.api';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

const Home = ({ navigation }) => {
  const { data: examSchedule } = useExamSchedule();

  const handlePress = () => {
    Linking.openURL(
      'https://m.blog.naver.com/PostList.naver?blogId=safeguardcustoms&tab=1',
    );
  };

  const formatExamDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, 'yyyy-MM-dd (EEE)', { locale: ko });
  };

  return (
    <View className="flex-1 p-10 bg-wh">
      <StatusBar style="dark" />
      <Text className="text-3xl font-bold pt-6">HOME</Text>
      <View className="pt-7">
        <Text className="text-3xl py-2">user 님,</Text>
        <Text className="text-3xl">안녕하세요</Text>
      </View>
      <View className="p-10 border rounded-3xl py-6 mt-10">
        <Text className="text-xl font-bold mb-4">국제무역사 시험 일정</Text>
        {examSchedule?.map((schedule) => (
          <View key={schedule.subjectId} className="flex-row items-center mb-3">
            <View className="bg-blue w-3 h-3 mr-2" />
            <Text className="text-base">
              {schedule.round}회 {formatExamDate(schedule.examDate)}
            </Text>
          </View>
        ))}
      </View>
      <View>
        <TouchableOpacity
          className="bg-blue flex justify-center items-center w-full py-4 rounded-xl mt-16"
          onPress={() => navigation.navigate('Mode')}
        >
          <Text className="text-xl text-wh font-bold">문제 풀기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-naverGreen flex justify-center items-center w-full py-4 rounded-xl mt-4"
          onPress={handlePress}
        >
          <Text className="text-xl text-wh font-bold">블로그 바로가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
