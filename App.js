/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { color, spacing } from "../Website/theme";
import { Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";

const Logo = require("./theme/logo.png")


const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  web: "Press Cmd+R to reload,\n" + "Cmd+Opt+i for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="white"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          autoCapitalize={"none"}
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="white"
        />
      </View>
      <Text style={styles.loginFailText}></Text>
      <TouchableOpacity
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.signupText} >Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7F2F8",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    },
  instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
    },
  logo: {
    alignSelf: "center",
    maxWidth: "100%",
    maxHeight: "100%",
    marginVertical: spacing[8],
    width: 700 / 5,
    height: 938 / 5,
    resizeMode: "stretch",
  },
  inputView: {
    width: "15%",
    backgroundColor: "#74BDCB",
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    outline: 'none',
    height: 50,
    color: "#20162D",
  },
  forgot: {
    color: "black",
    fontSize: 11,
    marginTop: 20,
  },
  loginFailText: {
    alignContent: "center",
    color: "red",
    fontSize: 11,
  },
  loginBtn: {
    width: "10%",
    backgroundColor: "#ed7c4cff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  signupText: {
    color: "#20162D",
  },
})
