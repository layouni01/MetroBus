import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  logo: {
    width: "100%",
    height: 250,
    alignItems: "center",
    marginBottom: 50,
  },
  input: {
    height: 50,
    flex: 1,
    paddingLeft: 15,
  },
  button: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 60,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
    paddingLeft: 10,
    marginBottom: 50,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  textforget: {
    fontSize: 15,
    color: Colors.darkGray,
    textDecorationLine: "underline",
    padding: 20,
  },
  textF: {
    fontSize: 15,
    color: "black",
  },
  textF2: {
    fontSize: 15,
    color: Colors.primary,
    textDecorationLine: "underline",
  },
  signupp: {
    flexDirection: "row",
    paddingLeft: 80,
    display: "flex",
    marginBottom: 20,
  },
  inputview: {
    display: "flex",
    flexDirection: "row",
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    paddingLeft: 10,
    width: "90%",
    alignSelf: "center",
  },
  icon: {
    marginHorizontal: 5,
    position: "absolute",
    right: 10,
    alignSelf: "center",
  },
});

export default styles;
