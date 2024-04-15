import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../utils";
const isIOS = Platform.OS === "ios";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3E0",
  },
  header: {
    marginTop: isIOS ? 44 : 0,
    paddingHorizontal: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 32,
  },
  inputContainer: {
    marginBottom: 32,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 2, // Add elevation for a subtle shadow on Android.
    ...(isIOS && {
      // Conditional spread for iOS-specific shadow.
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    }),
  },
  button: {
    width: "100%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 60,
    elevation: 3, // Add elevation for button shadow on Android.
    ...(isIOS && {
      // Conditional spread for iOS-specific shadow.
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    }),
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listItemText: {
    fontSize: 18,
  },
  closeModalButton: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",

    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5, // Add elevation for modal shadow on Android.
    ...(isIOS && {
      // Conditional spread for iOS-specific shadow.
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    }),
  },
});
export default styles;
