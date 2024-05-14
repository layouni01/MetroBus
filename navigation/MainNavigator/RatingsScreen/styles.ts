import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
    padding: 10,
    margin: 20,
    height: 200,
  },
  label: {
    fontSize: 20,
    color: "#333",
    margin: 8,
    padding: 10,
  },
  stars: {
    alignSelf: "center",
    flexDirection: "row",
    //margin: 20,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    height: 50,
    marginTop: 30,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  quickResponseContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    //marginBottom: 12,
    padding: 10,
  },
  quickResponseButton: {
    padding: 10,
    backgroundColor: "#E8E8E8",
    borderRadius: 5,
  },
});

export default styles;
