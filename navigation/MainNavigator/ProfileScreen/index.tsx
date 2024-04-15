import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import BottomAppBar from "../../BottomNavBar";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  // Define your sign out function or any other actions here
  const handleSignOut = () => {
    console.log("Sign out");
  };
  const navigation = useNavigation();
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
            source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual image path
            style={styles.profileImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Firas Layouni</Text>
            <Text style={styles.email}>firaslayouni@gmail.com</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Edit Profile" as never)}
          >
            <Ionicons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <MenuItem icon="notifications" text="Notifications" />

          <MenuItem
            icon="star"
            text="Avis and ratings"
            onPress={() => navigation.navigate("Ratings" as never)}
          />
          <MenuItem icon="document-text" text="Legal and Policies" />
          <MenuItem icon="help-circle" text="Help & Support" />
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