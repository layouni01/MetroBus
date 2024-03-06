import { View, Text } from "react-native";
import React from "react";
import ForgotPasswordScreen from "../AuthNavigator/ForgotPasswordScreen";
import SignupScreen from "../AuthNavigator/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../AuthNavigator/LoginScreen";
const MainStack = createNativeStackNavigator();
//main navigator
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="forget" component={ForgotPasswordScreen}/>
        <MainStack.Screen name="signup" component={SignupScreen}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
