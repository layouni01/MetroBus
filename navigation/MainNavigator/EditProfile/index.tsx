import React, { useState } from "react";
import { HeaderBackButton } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomAppBar from "../../BottomNavBar";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profilePic, setProfilePic] = useState(
    "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/143042343_1895477503933256_1687614422400570660_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VPugG3iGJS4AX_9ZiMB&_nc_ht=scontent.ftun7-1.fna&oh=00_AfDuQ0bvnN9wrpPj-MwEeLdDJAHQg9j-1IVBHxNfHP71VA&oe=6627B346"
  );
  const navigation = useNavigation();

  const handleSaveProfile = () => {
    console.log("Profile updated:", { name, lastname, email, password });
  };

  const handleChooseProfilePic = () => {
    console.log("Choose profile picture");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <TouchableOpacity onPress={handleChooseProfilePic}>
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
            <View style={styles.cameraIcon}>
              <FontAwesome name="camera" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
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
          <Ionicons name="person-outline" size={25} color={Colors.primary} />
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

        <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
          <Text style={styles.text}>Update</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default EditProfile;
