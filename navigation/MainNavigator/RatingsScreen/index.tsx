import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import BottomAppBar from "../../BottomNavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const RateAndShareScreen = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const [avis, setAvis] = useState("");
  const quickResponses = [
    "Good app !",
    "Excellent !",
    "Not bad",
    "Must improve",
  ];

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Ionicons
            name={i <= rating ? "ios-star-sharp" : "ios-star-outline"}
            size={50}
            color={i <= rating ? "#FFD64C" : "#ccc"}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };
  const handleQuickResponse = (response) => {
    setAvis(response);
  };
  const handleSubmit = async () => {
    if (rating > 0 && avis.trim()) {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const response = await axios.post(
          "http://192.168.1.53:5000/ratingavis/createratingavis",
          {
            number: rating,
            description: avis,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        Alert.alert("Feedback Submitted", "Thank you for your feedback!");
        console.log(response.data);
        setRating(0);
        setAvis("");
      } catch (error) {
        console.error("Error submitting feedback:", error);
        Alert.alert(
          "Submission Failed",
          "Unable to submit feedback. Please try again later."
        );
      }
    } else {
      Alert.alert(
        "Missing Information",
        "Please rate and provide feedback before submitting."
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.label}>What's Your Rate?</Text>
          <View style={styles.stars}>{renderStars()}</View>
          <Text style={styles.label}>Give us your feedback ! </Text>
          <TextInput
            value={avis}
            onChangeText={setAvis}
            placeholder="Why this rating ?"
            style={styles.input}
          />
          <View style={styles.quickResponseContainer}>
            {quickResponses.map((response, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleQuickResponse(response)}
                style={styles.quickResponseButton}
              >
                <Text>{response}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomAppBar />
    </View>
  );
};

export default RateAndShareScreen;
