import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
import styles from "../TrackScreen/styles";
const TrackScreen = () => {
  const route = useRoute();
  //const ticket = route.params;
  const { ticket, fromCoords, toCoords } = route.params;
  // const { fromCoords, toCoords } = route.params;
  const navigation = useNavigation();
  // Dummy coordinates for the map, replace with actual data
  const region = {
    latitude: (fromCoords.latitude + toCoords.latitude) / 2,
    longitude: (fromCoords.longitude + toCoords.longitude) / 2,
    latitudeDelta: Math.abs(fromCoords.latitude - toCoords.latitude) * 2,
    longitudeDelta: Math.abs(fromCoords.longitude - toCoords.longitude) * 2,
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
      <MapView style={styles.map} provider="google" initialRegion={region}>
        <Marker coordinate={fromCoords} title="From Station" />
        <Marker coordinate={toCoords} title="To Station" />
      </MapView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Confirmation", ticket);
        }}
        style={styles.confirmButton}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
      <BottomAppBar />
    </View>
  );
};

export default TrackScreen;
