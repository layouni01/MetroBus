import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../../utils";
import axios from "axios";
const logo = require("../../../assets/logo.png");

const SignupScreen = () => {
  const Navigation = useNavigation();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [error, setError] = useState();
  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowconfirmPassword = () => {
    setShowconfirmPassword(!showconfirmPassword);
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async () => {
    if (!name || !lastname || !email || !Password || !confirmpassword) {
      Alert.alert("Error", "Please fill all the fields.");
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }
    if (Password !== confirmpassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    const userData = {
      name: name.trim(),
      lastName: lastname.trim(),
      email: email.trim(),
      password: Password,
    };

    try {
      const response = await axios.post(
        "http://192.168.0.227:5000/user/register",
        userData
      );
      if (response.data) {
        // Success alert
        Alert.alert(
          "Registration Successful",
          "You have been successfully registered!",
          [{ text: "OK", onPress: () => Navigation.navigate("Login") }]
        );
      }
    } catch (error) {
      // Handling errors if the request failed
      const errorMessage = error.response
        ? error.response.data.msg
        : error.message;
      // Error alert
      Alert.alert("Registration Failed", errorMessage);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.inputView}>
          <Ionicons name="person-outline" size={25} color={Colors.primary} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#4458"
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <Ionicons name="person-outline" size={25} color={Colors.primary} />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#4458"
            onChangeText={(text) => setLastname(text)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <Ionicons name="mail-outline" size={25} color={Colors.primary} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#4458"
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <Ionicons
            name="lock-closed-outline"
            size={25}
            color={Colors.primary}
          />

          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            value={Password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#4458"
          ></TextInput>
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={24}
            color={Colors.primary}
            onPress={toggleShowPassword}
            style={styles.icon}
          />
        </View>
        <View style={styles.inputView}>
          <Ionicons
            name="lock-closed-outline"
            size={25}
            color={Colors.primary}
          />

          <TextInput
            style={styles.input}
            secureTextEntry={!showconfirmPassword}
            value={confirmpassword}
            onChangeText={setconfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="#4458"
          ></TextInput>
          <Ionicons
            name={showconfirmPassword ? "eye-outline" : "eye-off-outline"}
            size={24}
            color={Colors.primary}
            onPress={toggleShowconfirmPassword}
            style={styles.icon}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.signupp}>
          <Text style={styles.textF}> Already have an account !</Text>
          <TouchableOpacity
            onPress={() => Navigation.navigate("Login") as never}
          >
            <Text style={styles.textF2}> Log In </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
