import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import BottomAppBar from "../../BottomNavBar";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
const ConfirmationScreen = () => {
  const route = useRoute();
  const { trajet } = useRoute().params;
  const navigation = useNavigation();
  const goToQRCodeScreen = () => {
    if (!trajet) {
      Alert.alert("Error", "Ticket data is missing.");
    } else {
      navigation.navigate("QRcode", { trajet }); // Ensuring the trajet is passed as an object with a key 'trajet'
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            onPress={goToQRCodeScreen}
          >
            <Text style={styles.continueButtonText}>Get QR code</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
