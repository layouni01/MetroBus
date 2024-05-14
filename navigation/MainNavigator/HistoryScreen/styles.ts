import { StyleSheet } from "react-native";
import { Colors } from "../../../utils";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flatList: {
    width: "100%", // Take up the full width
  },
  ticketItem: {
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  ticketTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  ticketDescription: {
    fontSize: 14,
  },
  emptyMessageContainer: {
    flex: 1,

    alignItems: "center",
    paddingTop: 100,
  },
  emptyMessageText: {
    fontSize: 30,
    color: "grey",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "grey",
  },
  closeButton: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 45,
    elevation: 2,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  qrCode: {
    margin: 100,
  },
  viewMoreButton: {
    padding: 10,
    alignItems: "center",
    zIndex: 1,
    marginBottom: 100,
  },
});
export default styles;
