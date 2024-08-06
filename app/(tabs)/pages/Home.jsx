/* eslint-disable react/prop-types */
import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.home}>HOME</Text>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>user 님,</Text>
        <Text style={styles.greeting}>안녕하세요</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.title}>국제무역사 시험 일정</Text>
        <View style={styles.scheduleItem}>
          <View style={styles.square} />
          <Text style={styles.scheduleText}>57회 2024. 3. 30 (토)</Text>
        </View>
        <View style={styles.scheduleItem}>
          <View style={styles.square} />
          <Text style={styles.scheduleText}>58회 2024. 5. 25 (토)</Text>
        </View>
        <View style={styles.scheduleItem}>
          <View style={styles.square} />
          <Text style={styles.scheduleText}>59회 2024. 8. 10 (토)</Text>
        </View>
        <View style={styles.scheduleItem}>
          <View style={styles.square} />
          <Text style={styles.scheduleText}>60회 2024. 11. 16 (토)</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.goToExamButton}
          onPress={() => navigation.navigate("Mode")}
        >
          <Text style={styles.goToExamText}>문제 풀기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.goToBlogButton}
          onPress={() => navigation.navigate("Mode")}
        >
          <Text style={styles.goToBlogText}>블로그 바로가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  home: {
    fontSize: 30,
    fontWeight: "800",
  },
  greetingContainer: {
    paddingTop: 20,
  },
  greeting: {
    fontSize: 30,
    paddingVertical: 5,
  },
  boxContainer: {
    marginVertical: 50,
    padding: 20,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  scheduleItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  square: {
    width: 10,
    height: 10,
    backgroundColor: "blue",
    marginRight: 10,
  },
  scheduleText: {
    fontSize: 16,
  },
  goToExamButton: {
    backgroundColor: "#3182F7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 50,
    borderRadius: 15,
    marginBottom: 10,
  },
  goToExamText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  goToBlogButton: {
    backgroundColor: "#2DB400",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 50,
    borderRadius: 15,
  },
  goToBlogText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Home;
