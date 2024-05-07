import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";
export default StyleSheet.create({
  fullScreen: {
    flex: 1,
    // backgroundColor: "#f9f9f9", // Light grey background
  },
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 80,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "white", // White background for sections
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffb050",
    marginBottom: 10,
  },
  question: {
    fontWeight: "600",
    marginTop: 10,
    fontSize: 16,
    color: "#444",
  },
  answer: {
    marginTop: 5,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: "#667",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
