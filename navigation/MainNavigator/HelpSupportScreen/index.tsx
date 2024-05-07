import React from "react";
import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import BottomAppBar from "../../BottomNavBar";
import styles from "./styles";

const HelpSupportScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL("mailto:MetroBushelp@gmail.com?subject=Support Request");
  };

  return (
    <View style={styles.fullScreen}>
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FAQs</Text>
          <Text style={styles.question}>How do I update my profile?</Text>
          <Text style={styles.answer}>
            You can update your profile by going to the Profile tab and tapping
            on the Edit Profile button.
          </Text>
          <Text style={styles.question}>
            What to do if I forget my password?
          </Text>
          <Text style={styles.answer}>
            If you forget your password, you can reset it by selecting the
            "Forgot Password" option on the login screen.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Need More Help?</Text>
          <Text style={styles.content}>
            If you need further assistance, please don't hesitate to contact us
            directly at our support email. Tap the button below to send us an
            email.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
            <Text style={styles.buttonText}>Send Email</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomAppBar />
    </View>
  );
};

export default HelpSupportScreen;
