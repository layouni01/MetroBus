import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 16,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    height: 200,
  },
  label: {
    fontSize: 20,
    color: "#333",
    marginBottom: 15,
  },
  stars: {
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
});

export default styles;
