/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// const Kakao = require("../../../assets/images/kakaoLogin.png");
// const Naver = require("../../../assets/images/naverLogin.png");
// const Google = require("../../../assets/images/googleLogin.png");
// const Apple = require("../../../assets/images/appleLogin.png");

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>간편 로그인 후</Text>
      <Text style={styles.text}>이용이</Text>
      <Text style={styles.text}>가능합니다</Text>
      <StatusBar style="auto" />
      {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.kakaoButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.kakaoText}>카카오 로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.naverButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.naverText}>네이버 로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.googleText}>구글 로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.appleButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.appleText}>애플 로그인</Text>
      </TouchableOpacity>
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
    fontSize: 30,
  },
  kakao: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 50,
  },
  naver: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 50,
  },
  google: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 50,
  },
  apple: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 50,
  },
  // 카카오 버튼 스타일
  kakaoButton: {
    backgroundColor: "#F7E600",
    width: 315,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  kakaoText: {
    fontSize: 20,
    color: "#000",
  },
  // 네이버 버튼 스타일
  naverButton: {
    backgroundColor: "#2DB400",
    width: 315,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  naverText: {
    fontSize: 20,
    color: "#fff",
  },
  // 구글 버튼 스타일
  googleButton: {
    backgroundColor: "#f2f2f2",
    width: 315,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  googleText: {
    fontSize: 20,
    color: "#000",
  },
  // 애플 버튼 스타일
  appleButton: {
    backgroundColor: "#000",
    width: 315,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  appleText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default Login;
