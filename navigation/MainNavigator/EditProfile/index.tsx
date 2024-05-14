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
import * as FileSystem from "expo-file-system";

const EditProfile = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    photo: "",
  });
  const [showPassword, setShowPassword] = useState(false); // Correctly initialize here

  const handleChooseProfilePic = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled && result.assets) {
      const uri = result.assets[0].uri;
      const base64 = await convertImageToBase64(uri);

      setUser((prevState) => ({
        ...prevState,
        photo: base64,
      }));
      await AsyncStorage.setItem("profilePic", uri);
    }
  };
  const convertImageToBase64 = async (uri) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return base64;
    } catch (error) {
      console.error("Failed to convert image to base64:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        console.log("token:", token);

        const response = await axios.get(`http://192.168.1.16:5000/user/user`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log(response.data);
        setUser({
          ...user,
          name: response.data.name,
          lastName: response.data.lastName,
          email: response.data.email,
          photo: response.data.photo,
        });
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchUserData();
  }, []);
  const handleTextChange = async (name, value) => {
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSaveProfile = async () => {
    console.log("user:", user);
    if (!user.email || !user.name || !user.lastName) {
      Alert.alert("Required fields", "All fields must be filled.");
    }
    try {
      const token = await AsyncStorage.getItem("userToken");
      console.log(token);
      const res = await axios.put(
        "http://192.168.1.16:5000/user/updateUser",
        user,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res.data);
      Alert.alert("user is updated successfully!!");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <TouchableOpacity onPress={handleChooseProfilePic}>
              <Image
                source={{ uri: "data:image/png;base64," + user.photo }}
                style={styles.profilePic}
              />
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
                onChangeText={(text) => handleTextChange("lastName", text)}
                value={user.lastName || ""}
              />
            </View>
            <View style={styles.inputView}>
              <Ionicons name="mail-outline" size={25} color={Colors.primary} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#4458"
                onChangeText={(text) => handleTextChange("email", text)}
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
                onChangeText={(text) => handleTextChange("password", text)}
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
