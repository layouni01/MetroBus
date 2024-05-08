import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
import styles from "../TrackScreen/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TrackScreen = () => {
  const route = useRoute();
  const { trajet } = route.params;
  const navigation = useNavigation();

  const goToConfirmation = () => {
    console.log("Passing trajet data:", trajet); // Check what's being passed
    if (!trajet) {
      Alert.alert("Error", "Ticket data is missing.");
    } else {
      saveTicket(trajet)
        .then((ticket) => {
          navigation.navigate("Confirmation", { trajet });
        })
        .catch((err) => {
          console.log("Failed to save ticket:", err);
        });
    }
  };

  const calculateDuration = (startTime, endTime) => {
    // Extract hours and minutes from startTime and endTime
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    // Convert both times to minutes since midnight
    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;

    // Calculate the duration in minutes
    let durationMinutes = endTotalMinutes - startTotalMinutes;
    if (durationMinutes < 0) {
      // This condition accounts for overnight scenarios where the end time is on the next day
      durationMinutes += 24 * 60;
    }

    // Convert minutes into hours and minutes
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    // Return the duration in a formatted string
    return `${hours}h ${minutes}m`;
  };
  const saveTicket = async (trajet) => {
    try {
      const token = await AsyncStorage.getItem("userToken"); // Assuming token is stored in AsyncStorage
      const response = await axios.post(
        "http://192.168.1.43:5000/ticket/create",
        {
          trajet: trajet._id, // Assuming you have the trajet ID
          dateReservation: new Date().toISOString(), // Current date as reservation date
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Set the auth token in headers
          },
        }
      );

      console.log("Ticket saved:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error saving ticket:", error);
      Alert.alert("Error", "Failed to save ticket");
    }
  };
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
        <Text style={styles.info}>
          Duration: {calculateDuration(trajet.tempsDepart, trajet.tempsArrivee)}
        </Text>
        <Text style={styles.info}>
          Price: {trajet.prix || "Not provided"} TND{" "}
        </Text>
      </View>
      <MapView style={styles.map}></MapView>
      <TouchableOpacity onPress={goToConfirmation} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
      <BottomAppBar />
    </View>
  );
};

export default TrackScreen;
