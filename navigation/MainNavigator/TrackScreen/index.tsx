import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
import styles from "../TrackScreen/styles";
const TrackBus = () => {
  const route = useRoute();
  const ticket = route.params;
  const navigation = useNavigation();
  // Dummy coordinates for the map, replace with actual data
  const region = {
    latitude: 35.764252,
    longitude: 10.811289,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <View style={styles.ticketInfo}>
        <Text style={styles.title}>Ticket:</Text>
        <Text style={styles.info}>
          Destination: from {ticket.departure} To {ticket.arrival}
        </Text>
        <Text style={styles.info}>
          Time: {ticket.departureTime} - {ticket.arrivalTime}
        </Text>
        <Text style={styles.info}>Price: {ticket.price || "Not provided"}</Text>
      </View>
      <MapView style={styles.map} initialRegion={region}>
        {/* Add Marker components for bus stops or route here */}
      </MapView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Confirmation" as never);
        }}
        style={styles.confirmButton}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
      <BottomAppBar />
    </View>
  );
};

export default TrackBus;
