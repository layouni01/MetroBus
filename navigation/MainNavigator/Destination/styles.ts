import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import Colors from "../../../utils/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3E0",
  },

  map: {
    marginTop: 200,
    height: 450,
    width: "98%",
    borderRadius: 24,
    alignSelf: "center",
  },
  searchContainer: {
    position: "absolute",
    top: Platform.OS === "ios" ? 0 : 70, // Position below the status bar and navigation header.
    width: "100%",
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginVertical: 15,
    borderRadius: 20, // Ensure the container is rounded
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15, // Adjust padding to match the design
    fontSize: 16,
    borderTopLeftRadius: 20, // Match the container's border radius
    borderBottomLeftRadius: 20, // Match the container's border radius
  },
  swapButton: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    width: 40,
    height: 40,
    marginLeft: 350,
  },
  button: {
    position: "absolute",
    bottom: 110,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  clearButton: {
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10, // Add a right margin to separate it from the input.
  },
});

export default styles;
