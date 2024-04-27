import { StyleSheet, Platform } from "react-native";
import { Colors } from "../../../utils";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 32,
  },
  dropDown: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },

  button: {
    width: "90%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: 50,
    borderRadius: 10,
    marginVertical: 60,
    marginBottom: 150,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listItemText: {
    fontSize: 18,
  },

  imageContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
    borderRadius: 75,
  },
  selectedContainer: {
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
  Checkcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
});
export default styles;
