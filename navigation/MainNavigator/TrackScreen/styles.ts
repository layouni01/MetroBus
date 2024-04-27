import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import Colors from "../../../utils/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ticketInfo: {
    backgroundColor: Colors.white,
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
    margin: 10,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
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

    alignItems: "center",
    backgroundColor: Colors.primary,
    bottom: 130,
    borderRadius: 10,
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
  },
  confirmButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  qrCodeContainer: {
    position: "absolute",
    paddingLeft: "82%",
    paddingTop: "10%",
  },
});
export default styles;
