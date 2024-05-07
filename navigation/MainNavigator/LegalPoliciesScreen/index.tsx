import React from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles"; // Importing styles
import BottomAppBar from "../../BottomNavBar";
const LegalPoliciesScreen = () => {
  return (
    <View style={styles.fullScreen}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.section}>
          <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.text}>
            Our Privacy Policy describes the types of information we collect
            from and about you when you visit our app or use our services. This
            policy is intended to inform you about how we collect, use, share,
            and protect your personal information.
          </Text>
          <Text style={styles.text}>
            Personal information we collect includes your name, email address,
            contact details, device information, and usage data. We do not share
            personal information with third parties except as necessary to
            provide our services, comply with the law, or protect our rights.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Terms of Service</Text>
          <Text style={styles.text}>
            By using our app, you agree to be bound by these Terms of Service
            and to use the app in compliance with these terms, applicable laws,
            and regulations. Our services are not intended for children under 13
            years of age.
          </Text>
          <Text style={styles.text}>
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use
            of your account.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Copyrights and Trademarks</Text>
          <Text style={styles.text}>
            The content on this app, including text, graphics, logos, images,
            and software, is the property of our company or its content
            suppliers and protected by international copyright laws. The use of
            any content without permission from the copyright owner is strictly
            prohibited.
          </Text>
        </View>
      </ScrollView>
      <BottomAppBar />
    </View>
  );
};

export default LegalPoliciesScreen;
