import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
import styles from "../TrackScreen/styles";
const TrackScreen = () => {
  const route = useRoute();
  const { trajet } = route.params;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.ticketInfo}>
        <Text style={styles.title}>Ticket:</Text>
        <Text style={styles.info}>
          Destination: from {trajet.depart} To {trajet.arrivee}
        </Text>
        <Text style={styles.info}>
          Time: {trajet.tempsDepart} - {trajet.tempsArrivee}
        </Text>
        <Text style={styles.info}>Price: {trajet.prix || "Not provided"}</Text>
      </View>
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude: 35.664025,
          longitude: 10.827058,
          latitudeDelta: 0.5,
          longitudeDelta: 0.7,
        }}
      ></MapView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Confirmation", selectedTrajet);
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
