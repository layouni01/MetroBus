import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator";
import * as SplashScreen from "expo-splash-screen";

//import main navigator
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 800);
export default function App() {
  return <MainNavigator />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
