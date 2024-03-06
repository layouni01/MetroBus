import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 70,
    padding: 20,
  },
  logo: {
    width: "100%",
    height:250,
    alignItems: "center",
    marginBottom:50,

  },
  input: {
    height: 50,
    flex:1,
    paddingLeft:15
   
  },
  button: {
    width: "100%",
    backgroundColor: "#FFA300",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 20,
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
  textF: {
    fontSize: 15,
    color: "black",
  },
  textF2: {
    fontSize: 15,
    color: "blue",
  },
  signupp: {
    display: "flex",
    flexDirection: "row",
  },
  inputview: {
    display: "flex",
    flexDirection: "row",
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    paddingLeft:10,
    
  },
});

export default styles;
