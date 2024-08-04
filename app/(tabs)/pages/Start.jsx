/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const Logo = require("../../../assets/images/logo.png");

const Start = ({ navigation }) => {
  useEffect(() => {
    console.log(navigation);
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <TouchableOpacity style={styles.container}>
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
