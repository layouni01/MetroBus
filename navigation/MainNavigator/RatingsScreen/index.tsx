import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
const RateAndShareScreen = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("");

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Ionicons
            name={i <= rating ? "star" : "star-outline"}
            size={50}
            color={i <= rating ? "#ffd700" : "#ccc"}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>What's Your Rate?</Text>
        <View style={styles.stars}>{renderStars()}</View>
        <Text style={styles.label}>Give us your feedback ! </Text>
        <TextInput
          value={category}
          onChangeText={setCategory}
          placeholder="Your comments"
          style={styles.input}
        />
        {/* Additional content, like a submit button, can go here */}
      </View>
    </View>
  );
};

export default RateAndShareScreen;
