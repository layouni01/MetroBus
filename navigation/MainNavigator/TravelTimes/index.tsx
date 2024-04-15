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
  },
  {
    id: "2",
    departureTime: "7:15 PM",
    arrivalTime: "8:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 20 min",
  },
  {
    id: "3",
    departureTime: "7:15 PM",
    arrivalTime: "8:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "46 min",
  },
  {
    id: "9",
    departureTime: "7:15 PM",
    arrivalTime: "8:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 30 min",
  },
  {
    id: "4",
    departureTime: "7:15 PM",
    arrivalTime: "8:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 30 min",
  },
  {
    id: "5",
    departureTime: "7:15 PM",
    arrivalTime: "8:45 PM",
    departure: "Mahdia",
    arrival: "Moknine",
    duration: "1 hr 20 min",
  },
  {
    id: "6",
    departureTime: "15:15 PM",
    arrivalTime: "15:45 PM",
    departure: "Bekalta",
    arrival: "Moknine",
    duration: "30 min",
  },
  {
    id: "7",
    departureTime: "12:15 PM",
    arrivalTime: "13:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 30 min",
  },
  {
    id: "8",
    departureTime: "10:15 PM",
    arrivalTime: "11:45 PM",
    departure: "Sousse",
    arrival: "Moknine",
    duration: "1 hr 30 min",
  },
  // Add more ticket objects as needed
];

const TravelTimes = () => {
  const route = useRoute();
  const { from, to } = route.params || {};
  const [selectedId, setSelectedId] = useState(null);
  const [displayedTicketsCount, setDisplayedTicketsCount] = useState(3);
  const navigation = useNavigation();

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
        <View style={styles.ticketInfoContainer}>
          <Ionicons
            name="train-outline"
            size={24}
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
        </View>
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
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Select your ticket :</Text>
          <Text style={styles.subTitle}>
            Destination: from {from} To {to}
          </Text>
        </View>
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
      </View>

      <TouchableOpacity
        onPress={() => {
          const selectedTicket = tickets.find(
            (ticket) => ticket.id === selectedId
          );
          navigation.navigate("TrackScreen", selectedTicket);
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