import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 70,
    padding: 20,
  },
  logo: {
    height: 300,
    width: "100%",
  },
  input: {
    height: 50,
    flex: 1,
    paddingLeft: 15,
  },
  button: {
    width: "100%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 60,
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

  inputview: {
    display: "flex",
    flexDirection: "row",
    borderColor: Colors.primary,
    borderWidth: 1.5,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    paddingLeft: 10,
  },
  header: {
    backgroundColor: Colors.white,
  },
});

export default styles;
