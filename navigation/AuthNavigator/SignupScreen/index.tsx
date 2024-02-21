import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const SignupScreen = () => {
  const Navigation = useNavigation();

  return (
    <View>
      <Text>index</Text>
      <Button title="retour" onPress={() => Navigation.navigate("Login")} />
    </View>
  );
};

export default SignupScreen;
