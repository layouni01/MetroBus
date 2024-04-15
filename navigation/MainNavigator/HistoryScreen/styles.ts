import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flatList: {
    width: "100%", // Take up the full width
  },
  ticketItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  ticketTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  ticketDescription: {
    fontSize: 14,
  },
});
export default styles;
