import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";

const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Welcome" }}
      />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
