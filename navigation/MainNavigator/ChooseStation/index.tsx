import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
} from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";

const ChooseStation = () => {
  const navigation = useNavigation();
  const [stations, setStations] = useState([]);
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [selectedMode, setSelectedMode] = useState(null);
  const [fromOptions, setFromOptions] = useState(stations);
  const [toOptions, setToOptions] = useState(stations);
  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.53:5000/station/getAllStations"
        );

        setStations(
          response.data.map((station) => ({
            label: station.nom_station,
            value: station.nom_station,
            coordinates: station.coordinates, // ensure your station model includes coordinates if needed
          }))
        );
      } catch (error) {
        Alert.alert("Error", "Failed to fetch stations");
        console.error("Failed to fetch stations:", error);
      }
    };

    fetchStations();
  }, []);

  useEffect(() => {
    setFromOptions(stations.filter((station) => station.value !== toLocation));
    setToOptions(stations.filter((station) => station.value !== fromLocation));
  }, [stations, fromLocation, toLocation]);

  const handleNavigateToTravelTimes = () => {
    // Check if both inputs are filled
    if (
      fromLocation &&
      fromLocation !== "null" &&
      toLocation &&
      toLocation !== "null" &&
      selectedMode
    ) {
      // Navigate to TravelTimes with parameters
      navigation.navigate("TravelTimes", {
        from: fromLocation,
        to: toLocation,
        mode: selectedMode,
      });
    } else {
      // Show an alert if either input is empty
      Alert.alert(
        "Missing Information",
        "Please select 'From' and 'To' locations and a mode of transport to continue."
      );
    }
  };

  const handleSelectMode = (mode) => {
    setSelectedMode(selectedMode === mode ? null : mode);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Tipe your destination for today ?</Text>

          <Dropdown
            style={styles.dropDown}
            data={fromOptions} // list of stations
            labelField="label"
            valueField="value"
            placeholder="From station"
            placeholderStyle={{
              color: "lightgrey",
            }}
            value={fromLocation}
            onChange={(item) => setFromLocation(item.value)}
          />

          <Dropdown
            style={styles.dropDown}
            data={toOptions} // list of stations
            labelField="label"
            valueField="value"
            placeholder="To station"
            placeholderStyle={{
              color: "lightgrey",
            }}
            value={toLocation}
            onChange={(item) => {
              setToLocation(item.value);
            }}
          />
        </View>

        <View style={styles.Checkcontainer}>
          <TouchableOpacity
            style={[
              styles.imageContainer,
              selectedMode === "train" && styles.selectedContainer,
            ]}
            onPress={() => handleSelectMode("train")}
          >
            <Image
              source={require("../../../assets/Metro.png")}
              style={styles.image}
            />
            <Text>Train</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.imageContainer,
              selectedMode === "bus" && styles.selectedContainer,
            ]}
            onPress={() => handleSelectMode("bus")}
          >
            <Image
              source={require("../../../assets/bus.png")}
              style={styles.image}
            />
            <Text>Bus</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleNavigateToTravelTimes}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomAppBar />
    </View>
  );
};

export default ChooseStation;
