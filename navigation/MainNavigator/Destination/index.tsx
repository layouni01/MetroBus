import React, { useState, useEffect } from "react";
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapView, {
  Marker as MapMarker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { Alert } from "react-native"; // Import Alert
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
type Marker = {
  latitude: number;
  longitude: number;
};

const Destination: React.FC = () => {
  const route = useRoute();
  const Navigation = useNavigation();

  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const clearInput = (setter) => setter("");

  const [region, setRegion] = useState({
    latitude: 35.764252,
    longitude: 10.811289,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markers, setMarkers] = useState<Marker[]>([]);

  // Swap 'From' and 'To' locations
  const swapLocations = () => {
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };

  // Handle the search operation
  const handleSearch = () => {
    const fromCoords = { latitude: 35.6791, longitude: 10.9069 };
    const toCoords = { latitude: 35.7772, longitude: 10.8261 };
    setMarkers([fromCoords, toCoords]);
    setRegion({
      latitude: (fromCoords.latitude + toCoords.latitude) / 2,
      longitude: (fromCoords.longitude + toCoords.longitude) / 2,
      latitudeDelta: Math.abs(fromCoords.latitude - toCoords.latitude) * 2,
      longitudeDelta: Math.abs(fromCoords.longitude - toCoords.longitude) * 2,
    });
  };
  const handleNavigateToTravelTimes = () => {
    // Check if both fromLocation and toLocation are not empty
    if (fromLocation.trim() && toLocation.trim()) {
      // Navigate to TravelTimes with parameters
      Navigation.navigate("TravelTimes", {
        from: fromLocation,
        to: toLocation,
      });
    } else {
      // Show an alert if either input is empty
      Alert.alert(
        "Missing Information",
        "Please fill both 'From' and 'To' locations to continue."
      );
    }
  };
  useEffect(() => {
    setFromLocation(route.params?.stationName || "");
  }, [route.params?.stationName]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MapView
        provider={Platform.OS === "ios" ? null : PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      ></MapView>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="From:"
            value={fromLocation}
            onChangeText={setFromLocation}
          />
          {fromLocation !== "" && (
            <TouchableOpacity
              onPress={() => clearInput(setFromLocation)}
              style={styles.clearButton}
            >
              <Icon name="cancel" size={20} color="grey" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity onPress={swapLocations} style={styles.swapButton}>
          <Text>⇅</Text>
        </TouchableOpacity>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="To:"
            value={toLocation}
            onChangeText={setToLocation}
          />
          {toLocation !== "" && (
            <TouchableOpacity
              onPress={() => clearInput(setToLocation)}
              style={styles.clearButton}
            >
              <Icon name="cancel" size={20} color="grey" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <TouchableOpacity
        onPress={handleNavigateToTravelTimes}
        style={styles.button}
      >
        <Text style={styles.buttonText}>View Train Times</Text>
      </TouchableOpacity>
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default Destination;
