import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomAppBar from "../../BottomNavBar";
import styles from "./styles";

const HistoryScreen = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://192.168.1.64:5000/ticket/getAllTickets');
        setTickets(response.data);
      } catch (error) {
        Alert.alert('Error fetching tickets', error.message);
        console.error('Failed to fetch tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.ticketItem}>
      <Text style={styles.ticketTitle}>Reservation ID: {item._id}</Text>
      <Text>Date: {new Date(item.dateReservation).toDateString()}</Text>
      <Text>Price: ${item.price.toFixed(2)}</Text>
      <Text>Destination: {item.destination}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tickets}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        style={styles.flatList}
      />
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default HistoryScreen;
