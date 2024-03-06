import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    margin: 5,
    padding: 10,
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
  loginText: {
    flexDirection: "row",
  },
  inputView: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    height: 65,
    alignItems: "center",
    borderWidth: 1,
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