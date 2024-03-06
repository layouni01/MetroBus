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

const ForgotPasswordScreen = () => {
  const Navigation = useNavigation();
  const [email, setEmail] = useState("");
  const logo = require("../../../assets/logo.png");
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
