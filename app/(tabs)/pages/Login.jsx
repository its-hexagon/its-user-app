/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

// 이미지 리소스 가져오기
const kakoBtn = require('../../../assets/image/login/kakao.png');
const naverBtn = require('../../../assets/image/login/naver.png');
const googleBtn = require('../../../assets/image/login/google.png');
const appleBtn = require('../../../assets/image/login/apple.png');

const Login = ({ navigation }) => {
  // 로그인 핸들러 함수 정의
  const handleLogin = (provider) => {
    navigation.navigate('LoginWebView', { provider }); // LoginWebView로 이동하면서 provider 전달
  };

  return (
    <SafeAreaView className="flex-1 bg-wh pt-10">
      <StatusBar style="dark" />
      <View className="pt-20 px-10 flex-1">
        <Text className="text-3xl">간편 로그인 후</Text>
        <Text className="text-3xl">이용이</Text>
        <Text className="text-3xl">가능합니다</Text>
      </View>
      <View className="flex space-y-3 items-center pb-10">
        {/* 각 버튼에 handleLogin 함수 연결 */}
        <TouchableOpacity onPress={() => handleLogin('kakao')}>
          <Image source={kakoBtn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogin('naver')}>
          <Image source={naverBtn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogin('google')}>
          <Image source={googleBtn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={appleBtn} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
