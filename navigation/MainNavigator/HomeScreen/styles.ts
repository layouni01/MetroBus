import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF3E0",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 55,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
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
    marginBottom: 20,
    resizeMode: "cover",
    borderRadius: 10,
  },

  text: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  button: {
    width: 200,
    backgroundColor: Colors.primary,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 12,
    marginVertical: 10,
  },

  textboutton: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
export default styles;
