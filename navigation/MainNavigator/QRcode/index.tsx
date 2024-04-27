import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import QRCode from "react-native-qrcode-svg";
import BottomAppBar from "../../BottomNavBar";
import styles from "./styles";

const QRCodeScreen = ({ route }) => {
  const { ticketData } = route.params;
  const qrCodeValue = JSON.stringify({
    To: ticketData.arrival,
    From: ticketData.departure,
    departureTime: ticketData.departureTime,
    arrivalTime: ticketData.arrivalTime,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Your QR Code</Text>
        <QRCode
          value={qrCodeValue}
          size={230}
          backgroundColor="white"
          color="black"
          style={styles.qrCode}
        />
        <Text style={styles.footer}>Scan at the gate</Text>
      </View>
      <BottomAppBar />
    </SafeAreaView>
  );
};

export default QRCodeScreen;
