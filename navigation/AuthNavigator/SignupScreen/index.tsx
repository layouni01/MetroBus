import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../../utils";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const logo = require("../../../assets/logo.png");

const SignupScreen = () => {
  const Navigation = useNavigation();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContainer}>
        <View>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.inputView}>
          <Ionicons
            name="person-circle-outline"
            size={25}
            color={Colors.primary}
          />
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button pressed!")}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.loginText}>
          <Text> Already have an account !</Text>
          <TouchableOpacity
            onPress={() => Navigation.navigate("Login" as never)}
          >
            <Text style={{ color: "blue" }}> Log In </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
