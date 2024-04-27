import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import BottomAppBar from "../../BottomNavBar";
import { Colors } from "../../../utils";
// Mock data for the list of tickets
const tickets = [
  {
    id: "1",
    departureTime: "7:15 PM",
    arrivalTime: "8:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 4 min",
    coordinates: {
      departure: { latitude: 35.828828, longitude: 10.640525 },
      arrival: { latitude: 35.6324, longitude: 10.896 },
    },
  },
  {
    id: "2",
    departureTime: "9:15 PM",
    arrivalTime: "10:25 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 10 min",
    coordinates: {
      departure: { latitude: 35.828828, longitude: 10.640525 },
      arrival: { latitude: 35.6324, longitude: 10.896 },
    },
  },
  {
    id: "3",
    departureTime: "10:45 PM",
    arrivalTime: "12:00 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 15 min",
    coordinates: {
      departure: { latitude: 35.828828, longitude: 10.640525 },
      arrival: { latitude: 35.6324, longitude: 10.896 },
    },
  },
  {
    id: "9",
    departureTime: "12:15 PM",
    arrivalTime: "13:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 30 min",
    coordinates: {
      departure: { latitude: 35.828828, longitude: 10.640525 },
      arrival: { latitude: 35.6324, longitude: 10.896 },
    },
  },
  {
    id: "4",
    departureTime: "7:15 PM",
    arrivalTime: "8:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 30 min",
    coordinates: {
      departure: { latitude: 35.828828, longitude: 10.640525 },
      arrival: { latitude: 35.6324, longitude: 10.896 },
    },
  },
  {
    id: "5",
    departureTime: "7:15 PM",
    arrivalTime: "8:45 PM",
    departure: "Mahdia",
    arrival: "Moknine",
    duration: "1 hr 20 min",
    coordinates: {
      departure: { latitude: 35.828828, longitude: 10.640525 },
      arrival: { latitude: 35.6324, longitude: 10.896 },
    },
  },
  {
    id: "6",
    departureTime: "15:15 PM",
    arrivalTime: "15:45 PM",
    departure: "Bekalta",
    arrival: "Moknine",
    duration: "30 min",
    coordinates: {
      departure: { latitude: 35.828828, longitude: 10.640525 },
      arrival: { latitude: 35.6324, longitude: 10.896 },
    },
  },
  {
    id: "7",
    departureTime: "12:15 PM",
    arrivalTime: "13:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 30 min",
    coordinates: {
      departure: { latitude: 35.828828, longitude: 10.640525 },
      arrival: { latitude: 35.6324, longitude: 10.896 },
    },
  },
  {
    id: "8",
    departureTime: "10:15 PM",
    arrivalTime: "11:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 30 min",
    coordinates: {
      departure: { latitude: 35.828828, longitude: 10.640525 },
      arrival: { latitude: 35.6324, longitude: 10.896 },
    },
  },
  // Add more ticket objects as needed
];

const TravelTimes = () => {
  const route = useRoute();
  const { from, to, mode } = route.params || {};
  const [selectedId, setSelectedId] = useState(null);
  const [displayedTicketsCount, setDisplayedTicketsCount] = useState(3);
  const navigation = useNavigation();
  // Determine the icon based on the mode
  const getIconName = () => {
    return mode === "train" ? "train-outline" : "bus-outline";
  };
  const renderTicket = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[
          styles.ticketContainer,
          isSelected && styles.ticketContainerSelected,
        ]}
      >
        <SafeAreaView style={styles.ticketInfoContainer}>
          <Ionicons
            name={getIconName()}
            size={28}
            color={Colors.primary}
            style={styles.ticketIcon}
          />
          <View style={styles.ticketTextContainer}>
            <Text style={styles.Destination}>
              {item.departure} - {item.arrival}
            </Text>
            <Text style={styles.ticketText}>
              {item.departureTime} - {item.arrivalTime}
            </Text>

            <Text style={styles.durationText}>{item.duration}</Text>
          </View>
        </SafeAreaView>
        <View
          style={[
            styles.selectionIndicator,
            isSelected
              ? styles.selectionIndicatorSelected
              : styles.selectionIndicatorNotSelected,
          ]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Select your ticket :</Text>
      <Text style={styles.subTitle}>
        Destination: from {from} To {to}
      </Text>

      <FlatList
        data={tickets.slice(0, displayedTicketsCount)}
        renderItem={renderTicket}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      {displayedTicketsCount < tickets.length && (
        <TouchableOpacity
          onPress={() => setDisplayedTicketsCount(tickets.length)}
          style={styles.viewMoreButton}
        >
          <Text>View All</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={() => {
          const selectedTicket = tickets.find(
            (ticket) => ticket.id === selectedId
          );
          if (selectedTicket) {
            navigation.navigate("TrackScreen", {
              ticket: selectedTicket,
              fromCoords: selectedTicket.coordinates.departure,
              toCoords: selectedTicket.coordinates.arrival,
            });
          }
        }}
        style={styles.reserveButton}
        disabled={!selectedId}
      >
        <Text style={styles.reserveButtonText}>Reserve</Text>
      </TouchableOpacity>
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default TravelTimes;
