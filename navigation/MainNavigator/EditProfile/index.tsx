import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomAppBar from "../../BottomNavBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
const EditProfile = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  useEffect(() => {
    loadProfilePic();
  }, []);
  const loadProfilePic = async () => {
    try {
      const savedProfilePic = await AsyncStorage.getItem("profilePic");
      if (savedProfilePic) {
        setProfilePic(savedProfilePic);
      }
    } catch (e) {
      console.error("Failed to load the profile photo.");
    }
  };
  const navigation = useNavigation();

  const handleSaveProfile = () => {
    if (!name.trim() || !lastname.trim() || !email.trim() || !password.trim()) {
      Alert.alert(
        "Incomplete Fields",
        "Please fill in all fields before submitting."
      );
      return;
    }
    console.log("Profile updated:", { name, lastname, email, password });
    Alert.alert(
      "Profile Updated",
      "Your profile has been successfully updated."
    );
  };

  const handleChooseProfilePic = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const uri = result.assets[0].uri; // Access the URI from the assets array
      setProfilePic(uri);
      await AsyncStorage.setItem("profilePic", uri);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <TouchableOpacity onPress={handleChooseProfilePic}>
              <Image source={{ uri: profilePic }} style={styles.profilePic} />
              <View style={styles.cameraIcon}>
                <FontAwesome name="camera" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.inputView}>
              <Ionicons
                name="person-circle-outline"
                size={25}
                color={Colors.primary}
              />
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#4458"
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={styles.inputView}>
              <Ionicons
                name="person-outline"
                size={25}
                color={Colors.primary}
              />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#4458"
                onChangeText={(text) => setLastname(text)}
              />
            </View>
            <View style={styles.inputView}>
              <Ionicons name="mail-outline" size={25} color={Colors.primary} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#4458"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={styles.inputView}>
              <Ionicons
                name="lock-closed-outline"
                size={25}
                color={Colors.primary}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor="#4458"
              />
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color={Colors.primary}
                onPress={toggleShowPassword}
                style={styles.icon}
              />
            </View>
            <View style={styles.inputView}>
              <Ionicons
                name="lock-closed-outline"
                size={25}
                color={Colors.primary}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                placeholder="Confirm Password"
                placeholderTextColor="#4458"
              />
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color={Colors.primary}
                onPress={toggleShowPassword}
                style={styles.icon}
              />
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
            <Text style={styles.text}>Update</Text>
          </TouchableOpacity>
        </ScrollView>
        <BottomAppBar />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
