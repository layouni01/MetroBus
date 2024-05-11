import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView
} from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomAppBar from "../../BottomNavBar";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HistoryScreen = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {

    const fetchTickets = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        console.log("token:", token)

        const response = await axios.get('http://192.168.43.54:5000/ticket/userTickets', { headers: { Authorization: `Bearer ${token}` } });
        console.log(response.data)
        setTickets(response.data);
      } catch (error) {
        Alert.alert('Error fetching tickets', error.message);
        console.error('Failed to fetch tickets:', error.response.data);
      }
    };
    fetchTickets();
  }, []);
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.ticketItem}>
      <Text style={styles.ticketTitle}>Reservation ID: {item._id}</Text>
      <Text>Date: {new Date(item.dateReservation).toDateString()}</Text>
      <Text>Price: ${item.trajet.prix}</Text>
      <Text>Destination: {item.trajet.depart}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={tickets}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        style={styles.flatList}
        contentContainerStyle={{ flexGrow: 1 }} // Add this line
      />

      <BottomAppBar />
    </SafeAreaView>
  );
};

export default HistoryScreen;
