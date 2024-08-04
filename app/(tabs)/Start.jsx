/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Logo } from "../../assets/images/logo.png";

const Start = ({ navigation }) => {
  const handlePress = () => {
    console.log("move to login");
    navigation.navigate("Login");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text>hi</Text>
      <Image source={Logo} style={styles.logo} />
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Start;
