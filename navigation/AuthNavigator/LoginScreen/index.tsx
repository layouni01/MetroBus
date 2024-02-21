import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Button
        title="Login"
        onPress={() => Navigation.navigate("Signup" as never)}
      />
    </View>
  );
};

export default LoginScreen;