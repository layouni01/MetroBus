import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../utils"; // Ensure Colors is properly defined
import Destination from "../Destination";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
    marginTop: Platform.OS === "android" ? 30 : 20,
  },
  headerTitle: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
    padding: 10,
  },
  ticketContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
    elevation: 3, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.1, // for iOS shadow
    shadowRadius: 4, // for iOS shadow
    backgroundColor: "#FFF3E0",
    width: "90%",
    alignSelf: "center",
  },
  ticketContainerSelected: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  ticketInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ticketIcon: {
    // Style for the icon
  },
  ticketTextContainer: {
    marginLeft: 10,
  },
  ticketText: {
    fontSize: 16,
  },
  Destination: {
    fontSize: 16,
    marginTop: 5,
  },
  durationText: {
    fontSize: 16,
    marginTop: 5,
  },
  viewMoreButton: {
    padding: 10,
    alignItems: "center",
    zIndex: 1,
    marginBottom: 100,
  },
  reserveButton: {
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    width: "90%",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    zIndex: 1,
    marginBottom: 100,
  },
  reserveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  selectionIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginRight: 10,
  },
  selectionIndicatorSelected: {
    backgroundColor: Colors.primary,
  },
  selectionIndicatorNotSelected: {
    backgroundColor: "white",
  },
  buttonsContainer: {
    alignContent: "center",
    flexDirection: "row",
  },
});

export default styles;
