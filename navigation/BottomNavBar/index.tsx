import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../utils/colors";
import styles from "./styles";
const BottomAppBar = () => {
  const navigation = useNavigation();

  const goToHome = () => {
    navigation.navigate("Home" as never);
  };
  const goToProfile = () => {
    navigation.navigate("Profile" as never);
  };
  const goToNotifications = () => {
    navigation.navigate("Notifications" as never);
  };

  const goToHistory = () => {
    navigation.navigate("History" as never);
  };

  return (
    <View style={styles.bottomAppBar}>
      <TouchableOpacity onPress={goToHome} style={styles.iconContainer}>
        <FontAwesome name="home" size={24} color="#FFA300" />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToHistory} style={styles.iconContainer}>
        <FontAwesome name="history" size={24} color="#FFA300" />
        <Text style={styles.iconText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={goToNotifications}
        style={styles.iconContainer}
      >
        <FontAwesome name="bell" size={24} color="#FFA300" />
        <Text style={styles.iconText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToProfile} style={styles.iconContainer}>
        <FontAwesome name="user" size={24} color="#FFA300" />
        <Text style={styles.iconText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomAppBar;
