import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  Modal,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomAppBar from "../../BottomNavBar";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QRCode from "react-native-qrcode-svg";
const HistoryScreen = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [displayedTicketsCount, setDisplayedTicketsCount] = useState(3);
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        console.log("token:", token);

        const response = await axios.get(
          "http://192.168.1.16:5000/ticket/userTickets",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response.data);
        setTickets(response.data);
      } catch (error) {
        Alert.alert("Error fetching tickets", error.message);
        console.error("Failed to fetch tickets:", error.response.data);
      }
    };
    fetchTickets();
  }, []);
  const renderItem = ({ item }) => {
    const qrCodeValue = JSON.stringify(
      {
        To: item.trajet.arrivee,
        From: item.trajet.depart,
        departureTime: item.trajet.tempsDepart,
        arrivalTime: item.trajet.tempsArrivee,
        Prix: item.trajet.prix,
        ReservationDate: item.dateReservation,
      },
      null,
      2
    );

    return (
      <TouchableOpacity
        style={styles.ticketItem}
        onPress={() => {
          setSelectedTicket(item);
          setModalVisible(true);
        }}
      >
        <Text style={styles.ticketTitle}>Reservation ID: {item._id}</Text>
        <Text>Date: {new Date(item.dateReservation).toDateString()}</Text>
        <Text>Price: {item.trajet.prix} TND</Text>
        <Text>
          Destination: from {item.trajet.depart} to {item.trajet.arrivee}
        </Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Scan the Qr Code for more informations
              </Text>
              <QRCode
                value={qrCodeValue}
                size={280}
                backgroundColor="white"
                color="black"
              />
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tickets.slice(0, displayedTicketsCount)}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item._id ? item._id.toString() : index.toString()
        }
      />

      {displayedTicketsCount < tickets.length && (
        <TouchableOpacity
          onPress={() => setDisplayedTicketsCount(tickets.length)}
          style={styles.viewMoreButton}
        >
          <Text>View All</Text>
        </TouchableOpacity>
      )}

      <BottomAppBar />
    </SafeAreaView>
  );
};

export default HistoryScreen;
