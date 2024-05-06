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
import axios from "axios";
const EditProfile = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleTextChange = (name, value) => {
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://192.168.43.206:5000/user/getAllUsers/${user}`
      );
      if (response.data) {
        setUser({
          name: response.data.name,
          lastName: response.data.lastName,
          email: response.data.email,
          password: "",
        });
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      Alert.alert("Error", "Unable to load user data.");
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

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

  const handleSaveProfile = async (text) => {
    text.preventDefault();
    console.log(user);

    if (!user.email || !user.name || !user.lastName) {
      Alert.alert("Tous les champs doivent être remplis.");
      return;
    }
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
                onChangeText={(text) => handleTextChange("name", text)}
                value={user.name || ""}
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
                value={user.lastName || ""}
              />
            </View>
            <View style={styles.inputView}>
              <Ionicons name="mail-outline" size={25} color={Colors.primary} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#4458"
                value={user.email || ""}
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
