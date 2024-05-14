import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBackButton } from "@react-navigation/elements";
import { Colors } from "../../../../utils";
import styles from "../styles";

const UpdatePassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const logo = require("../../../assets/logo.png");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowconfirmPassword = () => {
    setShowconfirmPassword(!showconfirmPassword);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
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
        <View style={styles.inputview}>
          <Ionicons
            name="lock-closed-outline"
            size={24}
            color={Colors.primary}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={!showconfirmPassword}
            value={confirmpassword}
            style={styles.input}
            onChangeText={setconfirmPassword}
          />
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={24}
            color={Colors.primary}
            onPress={toggleShowconfirmPassword}
            style={styles.icon}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdatePassword;
