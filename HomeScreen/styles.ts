import { StyleSheet } from "react-native";
import styles from "../navigation/AuthNavigator/ForgotPasswordScreen/styles";

const ss = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 55,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 120,
    marginBottom: 10,
    resizeMode: "cover",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  button: {
    width: 200,
    backgroundColor: "#FFA300",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  textboutton: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
export default ss;