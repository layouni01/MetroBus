import { StyleSheet } from "react-native";

export default StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 20,
    paddingBottom: 100, // Adjust this value as needed to prevent overlap
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffb050",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    paddingBottom: 20,
  },
});
