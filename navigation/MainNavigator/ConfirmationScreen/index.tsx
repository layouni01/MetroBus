import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import BottomAppBar from "../../BottomNavBar";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const goToTrackScreen = () => {
    navigation.navigate("TrackScreen", { qrCode: true }); // Pass parameters as needed
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("./../../../assets/checkmark.png")}
          style={styles.checkmark}
        />
        <Text style={styles.confirmationMessage}>
          Your reservation is confirmed
        </Text>
        <Text style={styles.thankYouText}>Thank you for using our app.</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={goToTrackScreen}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
