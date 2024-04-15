import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import BottomAppBar from "../../BottomNavBar";

const ChooseStation = () => {
  const [station, setStation] = useState("");
  const [stationsList, setStationsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const fetchNearbyStations = useCallback(async (location) => {
    // Ideally, you would replace this with an actual API call
    // to fetch the stations based on the user's current location.
    // For now, this is just a simulated response.
    return [
      { id: "1", name: "Station 1", distance: "0.5 km" },
      { id: "2", name: "Station 2", distance: "1.0 km" },
    ];
  }, []);

  const findStationsNearby = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Permission to access location was denied"
        );
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      const nearbyStations = await fetchNearbyStations(coords);
      setStationsList(nearbyStations);
      setModalVisible(true);
    } catch (error) {
      Alert.alert("Location Error", "Unable to retrieve the current location.");
    }
  };

  const handleStationSelect = (selectedStation) => {
    setStation(selectedStation.name);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleStationSelect(item)}
    >
      <Text style={styles.listItemText}>
        {item.name} - {item.distance}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Which train station do you usually start your day?
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setStation}
            value={station}
            placeholder="Train station"
          />
          <TouchableOpacity
            style={styles.locationButton}
            onPress={findStationsNearby}
          >
            <Icon name="my-location" size={24} color="#ffa300" />
            <Text> Your location</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Destination", { stationName: station })
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={stationsList}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default ChooseStation;
