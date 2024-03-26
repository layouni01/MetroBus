import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
  scrollViewContainer: {
    flex: 1,
    paddingHorizontal:Platform.OS==="ios"?20:0
  },
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    height: 50,
    flex: 1,
    margin:5,
    padding: 5,
    flexDirection: "row",
    width: "100%",
  },

  button: {
    marginVertical: 30,
    padding: 10,
    backgroundColor: Colors.primary,
    width: "100%",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    height: 200,
    width: "100%",
  },
  loginButton: { padding: 10 },
  signupp: {
    display: "flex",
    flexDirection: "row",
  },
  textF: {
    fontSize: 15,
    color: "black",
  },
  textF2: {
    fontSize: 15,
    color: "#FFA300",
    textDecorationLine: "underline"

  },
  inputView: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    height: 55,
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
    paddingLeft: 10,
  },
  icon: {
    marginHorizontal: 5,
    position: "absolute",
    right: 10,
    alignSelf: "center",
  },
});

export default styles;
