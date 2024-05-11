import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const ProfileScreen = () => {
  const [profilePic, setProfilePic] = useState(
    "https://via.placeholder.com/150"
  );
  const [user, setUser] = useState({ name: "", email: "", lastName: "", photo: "" });

  const navigation = useNavigation();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        console.log("token:", token)

        const response = await axios.get(`http://192.168.43.54:5000/user/user`, { headers: { Authorization: `Bearer ${token}` } });

        console.log(response.data)
        setUser(response.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          Alert.alert("Error", "User not found. Please make sure the user ID is correct.");
        } else {
          Alert.alert("Error", "Failed to fetch user data");
        }
        console.error("Failed to fetch user data:", error);
      }
    };
    fetchUserData();

  }, []);


  const handleSignOut = async () => {
    AsyncStorage.removeItem("userToken");

    navigation.navigate("Login" as never);
  };

  const MenuItem = ({ icon, text, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={24} color="black" />
      <Text style={styles.menuItemText}>{text}</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: "data:image/png;base64," + user.photo }} // Replace with actual image path
            style={styles.profileImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>
              {user.name} {user.lastName}
            </Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Edit Profile" as never)}
          >
            <Ionicons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <MenuItem
            icon="notifications"
            text="Notifications"
            onPress={() => navigation.navigate("Notifications" as never)}
          />

          <MenuItem
            icon="star"
            text="Avis and ratings"
            onPress={() => navigation.navigate("Ratings" as never)}
          />
          <MenuItem
            icon="document-text"
            text="Legal and Policies"
            onPress={() => navigation.navigate("Legal and Policies" as never)}
          />
          <MenuItem
            icon="help-circle"
            text="Help & Support"
            onPress={() => navigation.navigate("Help & Support" as never)}
          />
        </View>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>SIGN OUT</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default ProfileScreen;
