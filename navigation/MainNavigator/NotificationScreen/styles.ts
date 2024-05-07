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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
export default styles;
