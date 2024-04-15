import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomAppBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
  iconText: {
    fontSize: 12,
    fontWeight: "800",
  },
});

export default styles;
