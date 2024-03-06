import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../../utils";

const LoginScreen = () => {
  const Navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logo = require("../../../assets/logo.png");
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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="cover" />
        <View style={styles.inputview}>
          <Ionicons name="mail" size={24} color={Colors.primary} />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputview}>
          <Ionicons
            name="lock-closed-outline"
            size={24}
            color={Colors.primary}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={24}
            color={Colors.primary}
            onPress={toggleShowPassword}
            style={styles.icon}
          />
        </View>
        <TouchableOpacity onPress={() => Navigation.navigate("forget")}>
          <Text style={styles.textF}> Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sign in </Text>
        </TouchableOpacity>
        <View style={styles.signupp}>
          <Text style={styles.textF}> Don’t have an account? </Text>
          <TouchableOpacity onPress={() => Navigation.navigate("signup")}>
            <Text style={styles.textF2}> sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
