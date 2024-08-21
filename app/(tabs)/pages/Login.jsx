/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// const Kakao = require("../../../assets/images/kakaoLogin.png");
// const Naver = require("../../../assets/images/naverLogin.png");
// const Google = require("../../../assets/images/googleLogin.png");
// const Apple = require("../../../assets/images/appleLogin.png");

const Login = ({ navigation }) => {
  return (
    <View className="flex-1 bg-wh pt-10 pl-10">
      <StatusBar style="dark" />
      <View className="pt-20">
        <Text className="text-3xl">간편 로그인 후</Text>
        <Text className="text-3xl">이용이</Text>
        <Text className="text-3xl">가능합니다</Text>
      </View>
      <View className="flex space-y-3">
        <TouchableOpacity
          className="bg-kakoYellow w-11/12 items-center py-3"
          onPress={() => navigation.navigate('Home')}
        >
          <Text className="text-xl">카카오 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-naverGreen w-11/12 items-center py-3"
          onPress={() => navigation.navigate('Home')}
        >
          <Text className="text-xl">네이버 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-googleGray w-11/12 items-center py-3"
          onPress={() => navigation.navigate('Home')}
        >
          <Text className="text-xl">구글 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-appleBlack w-11/12 items-center py-3"
          onPress={() => navigation.navigate('Home')}
        >
          <Text className="text-xl text-wh">애플 로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
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
