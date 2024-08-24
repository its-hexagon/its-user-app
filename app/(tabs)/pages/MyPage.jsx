import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

const user = require('../../../assets/image/user.png');
const setting = require('../../../assets/image/setting.png');
const settingBlue = require('../../../assets/image/settingBlue.png');
const power = require('../../../assets/image/power.png');

const MyPage = () => {
  return (
    <View className="flex-1 bg-wh p-10">
      <StatusBar style="dark" />
      <Text className="text-2xl text-blue pt-10 font-bold">마이페이지</Text>
      <View className="pt-8 flex-row items-center">
        <Image source={user} className="w-14 h-14" />
        <Text className="text-2xl font-bold ml-6">이서연</Text>
      </View>
      <View className="pt-20 pb-3 flex-row items-center border-b">
        <Image source={settingBlue} className="w-10 h-10" />
        <Text className="text-xl font-bold ml-4">내 정보 관리</Text>
      </View>
      <View className="py-3 flex-row items-center border-b">
        <Image source={power} className="w-10 h-10" />
        <Text className="text-xl font-bold ml-4">로그아웃</Text>
      </View>
    </View>
  );
};

export default MyPage;
