import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 30,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    position: "relative",
    overflow: "hidden",
    alignSelf: "center",
  },
  inputView: {
    flexDirection: "row",
    marginVertical: 10,
    width: "90%",
    height: 55,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    paddingLeft: 10,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    alignSelf: "center",
    width: "90%",
    height: 50,
    backgroundColor: "#FFA300",
    alignItems: "center",
    justifyContent: "center",
    // paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: 100,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  icon: {
    marginHorizontal: 5,
    position: "absolute",
    right: 20,
    alignSelf: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  cameraIcon: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    // padding: 12,
    opacity: 0.5,
    // right: 120,
    top: 70,
    alignSelf: "center",
  },
  texth: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 80,
  },
});
export default styles;
