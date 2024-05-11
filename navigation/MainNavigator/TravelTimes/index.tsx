import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import BottomAppBar from "../../BottomNavBar";
import { Colors } from "../../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TravelTimes = () => {
  const route = useRoute();
  const { from, to, mode } = route.params || {};
  const [selectedId, setSelectedId] = useState(null);
  const [displayedTicketsCount, setDisplayedTicketsCount] = useState(3);
  const [trajets, setTrajets] = useState([]);
  const navigation = useNavigation();
  // Determine the icon based on the mode
  const getIconName = () => {
    return mode === "metro" ? "train-outline" : "bus-outline";
  };

  useEffect(() => {
    const fetchTrajets = async () => {
      const token = await AsyncStorage.getItem("userToken")

      try {
        const response = await axios.get(
          `http://192.168.43.54:5000/trajet/getAllTrajet`,
          {
            params: { depart: from, arrivee: to, Type: mode }, headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        const currentTime = new Date();
        // Sort the trajets by departure time
        const sortedAndFilteredTrajets = response.data
          .filter((trajet) => {
            const [hours, minutes] = trajet.tempsDepart.split(":").map(Number);
            const trajetDate = new Date(currentTime);
            trajetDate.setHours(hours, minutes, 0);
            return trajetDate > currentTime;
          })
          .sort((a, b) => {
            const timeA = a.tempsDepart.split(":").map(Number);
            const timeB = b.tempsDepart.split(":").map(Number);
            return timeA[0] * 60 + timeA[1] - (timeB[0] * 60 + timeB[1]);
          });

        setTrajets(sortedAndFilteredTrajets);
      } catch (error) {
        console.error("Error fetching trajets:", error);
      }
    };

    fetchTrajets();
  }, [from, to, mode]);

  const renderTicket = ({ item }) => {
    const isSelected = item._id === selectedId;
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item._id)}
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
              {item.depart} - {item.arrivee}
            </Text>
            <Text style={styles.ticketText}>
              Departs: {item.tempsDepart} - Arrives: {item.tempsArrivee}
            </Text>

            <Text style={styles.durationText}>Price: {item.prix} TND</Text>
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

      {trajets.length > 0 ? (
        <>
          <FlatList
            data={trajets.slice(0, displayedTicketsCount)}
            renderItem={renderTicket}
            keyExtractor={(item, index) =>
              item._id ? item._id.toString() : index.toString()
            }
            extraData={selectedId}
          />

          {displayedTicketsCount < trajets.length && (
            <TouchableOpacity
              onPress={() => setDisplayedTicketsCount(trajets.length)}
              style={styles.viewMoreButton}
            >
              <Text>View All</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => {
              const selectedTrajet = trajets.find(
                (ticket) => ticket._id === selectedId
              );
              if (selectedTrajet) {
                navigation.navigate("TrackScreen", {
                  trajet: selectedTrajet,
                });
              } else {
                Alert.alert(
                  "Error",
                  "No ticket selected or ticket data is missing"
                );
              }
            }}
            style={styles.reserveButton}
            disabled={!selectedId} // This disables the button if no ticket is selected
          >
            <Text style={styles.reserveButtonText}>Reserve</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.noTicketsText}>No ticket available for today</Text>
      )}

      <BottomAppBar />
    </SafeAreaView>
  );
};

export default TravelTimes;