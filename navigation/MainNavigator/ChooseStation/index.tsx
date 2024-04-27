import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  Alert,
  Image,
} from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  {
    label: "sousse",
    value: "sousse",
    coordinates: { latitude: 35.825603, longitude: 10.608395 },
  },
  {
    label: "monastir",
    value: "monastir",
    coordinates: { latitude: 35.764252, longitude: 10.811289 },
  },
  {
    label: "moknine",
    value: "moknine",
    coordinates: { lat: 35.7302, lng: 10.9119 },
  },
  {
    label: "ksar helal",
    value: "ksar helal",
    coordinates: { lat: 35.6488, lng: 10.8882 },
  },
];

const ChooseStation = () => {
  const navigation = useNavigation();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [selectedMode, setSelectedMode] = useState(null);
  const [fromOptions, setFromOptions] = useState(data);
  const [toOptions, setToOptions] = useState(data);

  useEffect(() => {
    setFromOptions(data.filter((item) => item.value !== toLocation));
    setToOptions(data.filter((item) => item.value !== fromLocation));
  }, [fromLocation, toLocation]);

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
            data={data} // list of stations
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
