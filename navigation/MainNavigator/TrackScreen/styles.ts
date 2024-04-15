import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import Colors from "../../../utils/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ticketInfo: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
  map: {
    flex: 1,
  },
  confirmButton: {
    zIndex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: Colors.primary,
    marginBottom: 100,
    borderRadius: 20,
    width: "80%",
    alignSelf: "center",
  },
  confirmButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default styles;
