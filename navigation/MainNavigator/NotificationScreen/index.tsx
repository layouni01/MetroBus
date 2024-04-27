import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "../NotificationScreen/styles";
import { useNavigation } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    // Here you would fetch notifications from your backend or local storage
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    // Simulating fetching data
    const fetchedNotifications = [
      {
        id: "1",
        title: "Bus n°6 en Retard de 20min ",
        date: "2024-04-15",
        content:
          "Le Bus n°6 qui lie entre Sousse et Moknine est en panne un retard de 20min est estimé",
        expanded: false,
      },
      {
        id: "2",
        title: "Train n°32 en Retard de 30min",
        date: "2024-04-14",
        content:
          "Le Train n°32 qui lie entre Ksar Helal et Sayada  est en panne un retard de 30min est estimé",
        expanded: false,
      },
      // Add more notifications
    ];
    setNotifications(fetchedNotifications);
  };
  const toggleDetails = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, expanded: !notification.expanded };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };
  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDate}>{item.date}</Text>
      {item.expanded && (
        <Text style={styles.notificationContent}>{item.content}</Text>
      )}
      <TouchableOpacity
        style={styles.moreDetailsButton}
        onPress={() => toggleDetails(item.id)}
      >
        <Text style={styles.moreDetailsButtonText}>
          {item.expanded ? "Less Details" : "More Details"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
