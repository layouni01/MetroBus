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
        options={{ title: "Welcome", headerShown: false }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false, title: "Forgot Password" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
