import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import Colors from "../../../utils/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    width: 150,
    height: 150,
  },
  confirmationMessage: {
    marginTop: 24,
    fontSize: 22,
    fontWeight: "bold",
  },
  thankYouText: {
    marginTop: 8,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    height: 50,
    width: "80%",
    marginVertical: 100,
    alignSelf: "center",
  },
  continueButtonText: {
    marginTop: 13,
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default styles;
