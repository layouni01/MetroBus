import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  notificationDate: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  notificationContent: {
    marginTop: 10,
    fontSize: 14,
    color: "black",
  },
  moreDetailsButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  moreDetailsButtonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
export default styles;
