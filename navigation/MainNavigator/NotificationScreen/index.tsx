import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "../NotificationScreen/styles";
import { useNavigation } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");

      const response = await axios.get(
        "http://192.168.43.54:5000/notification/getAllnotification", { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data && response.data.length > 0) {
        const fetchedNotifications = response.data.map((notification) => ({
          id: notification._id,
          title: notification.title,
          date: new Date(notification.date).toLocaleDateString(),
          content: notification.message,
          expanded: false,
        }));
        setNotifications(fetchedNotifications);
      } else {
        // Handle the case where there are no notifications
        setNotifications([]);
      }
    } catch (error) {
      console.error("Failed to fetch notifications:", error);
      Alert.alert("Error", "Failed to load notifications.");
    }
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

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        It's quiet for now... We'll let you know when there's more to share!
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmptyComponent} // Renders when list is empty
      />
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
