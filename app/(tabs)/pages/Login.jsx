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
import { KakaoLogin } from '../../../api/oauth2/KakaoLogin';

const kakoBtn = require('../../../assets/image/login/kakao.png');
const naverBtn = require('../../../assets/image/login/naver.png');
const googleBtn = require('../../../assets/image/login/google.png');
const appleBtn = require('../../../assets/image/login/apple.png');

const Login = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-wh pt-10">
      <StatusBar style="dark" />
      <View className="pt-20 px-10 flex-1">
        <Text className="text-3xl">간편 로그인 후</Text>
        <Text className="text-3xl">이용이</Text>
        <Text className="text-3xl">가능합니다</Text>
      </View>
      <View className="flex space-y-3 items-center pb-10">
        <TouchableOpacity onPress={() => KakaoLogin(navigation)}>
          <Image source={kakoBtn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={naverBtn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={googleBtn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={appleBtn} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  kakao: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
  },
  naver: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
  },
  google: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
  },
  apple: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
  },

  kakaoText: {
    fontSize: 20,
    color: '#000',
  },
});

export default Login;

{
  /* <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={Kakao} style={styles.kakao} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={Naver} style={styles.naver} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={Google} style={styles.google} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={Apple} style={styles.apple} />
      </TouchableOpacity> */
}

// const Kakao = require('../../../assets/image/login/kakaoLogin.png');
// const KakaoLogo = require('../../../assets/image/login/kakaoLogo.png');
// const Naver = require('../../../assets/image/login/naverLogin.png');
// const Google = require('../../../assets/image/login/googleLogin.png');
// const GoogleLogo = require('../../../assets/image/login/googleLogo.png');
// const Apple = require('../../../assets/image/login/appleLogin.png');
