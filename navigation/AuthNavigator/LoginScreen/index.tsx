import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
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
  const handleSignIn = () => {
    if (email.trim() && password.trim()) {
      Navigation.navigate("ChooseStation" as never);
    } else {
      // Show alert if validation fails
      Alert.alert("Error", "Please fill in all fields before continuing.");
    }
  };
  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.inputview}>
          <Ionicons name="mail-outline" size={24} color={Colors.primary} />
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
        <TouchableOpacity
          onPress={() => Navigation.navigate("ForgetPassword" as never)}
        >
          <Text style={styles.textforget}> Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.text}>Sign in </Text>
        </TouchableOpacity>
        <View style={styles.signupp}>
          <Text style={styles.textF}> Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => Navigation.navigate("SignUp" as never)}
          >
            <Text style={styles.textF2}> sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
