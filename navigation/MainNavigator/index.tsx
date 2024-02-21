import { View, Text } from "react-native";
import React from "react";
import AuthNavigator from "../AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const MainStack = createNativeStackNavigator();
//main navigator
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Auth" component={AuthNavigator} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
