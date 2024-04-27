import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    shadowOpacity: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Set the borderRadius to half the width/height to create a circle
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  email: {
    color: "grey",
  },
  menuSection: {
    marginVertical: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#eee",
  },
  menuItemText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
  signOutButton: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    width: "90%",
    height: 50,
    alignSelf: "center",
  },
  signOutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
