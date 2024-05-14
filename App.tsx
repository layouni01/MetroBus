import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import * as SplashScreen from "expo-splash-screen";

//import main navigator
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 200);
export default function App() {
  return <MainNavigator />;
  // return <AuthNavigator />;
}
