/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const arrow = require("../../../assets/image/arrow.png");

const SelectMode = () => {
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.title}>국제 무역사</Text>
        <Text style={styles.title}>독학으로 끝내기</Text>
      </View>
      <View style={styles.selectTextView}>
        <Text style={styles.selectText}>학습 종류를 선택하세요</Text>
        <Image source={arrow} style={styles.arrow} />
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textInButtons}>CBT 모의고사 풀기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textInButtons}>과목별 학습 모드</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.textInButtons}>오답노트 보기</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 70,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  selectTextView: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
  },
  selectText: {
    fontSize: 18,
  },
  arrow: {
    marginVertical: 20,
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#3182F7",
    marginBottom: 50,
  },
  textInButtons: {
    color: "#fff",
    fontSize: 20,
    paddingVertical: 20,
  },
});

export default SelectMode;
