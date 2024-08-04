/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const Kakao = require("../../../assets/images/kakaoLogin.png");
const Naver = require("../../../assets/images/naverLogin.png");
const Google = require("../../../assets/images/googleLogin.png");
const Apple = require("../../../assets/images/appleLogin.png");

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>간편 로그인 후</Text>
      <Text style={styles.text}>이용이</Text>
      <Text style={styles.text}>가능합니다</Text>
      <StatusBar style="auto" />
      <Image source={Kakao} style={styles.kakao} />
      <Image source={Naver} style={styles.naver} />
      <Image source={Google} style={styles.google} />
      <Image source={Apple} style={styles.apple} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    paddingTop: 100,
    paddingLeft: 30,
  },
  text: {
    fontSize: 30, // 폰트 크기를 원하는 크기로 설정
  },

  kakao: {
    position: "absolute",
    width: 360,
    height: 50,
    bottom: 200, // 화면 하단에서 30px 위에 배치
  },
  naver: {
    position: "absolute",
    bottom: 140,
    width: 360,
    height: 50,
  },
  google: {
    position: "absolute",
    bottom: 80,
    width: 360,
    height: 50,
  },
  apple: {
    position: "absolute",
    bottom: 20,
    width: 360,
    height: 50,
  },
});

export default Login;
