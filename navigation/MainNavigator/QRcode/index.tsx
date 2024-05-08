import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import QRCode from "react-native-qrcode-svg";
import BottomAppBar from "../../BottomNavBar";
import styles from "./styles";

const QRCodeScreen = ({ route }) => {
  const { trajet } = route.params;
  const qrCodeValue = JSON.stringify(
    {
      To: trajet.arrivee,
      From: trajet.depart,
      departureTime: trajet.tempsDepart,
      arrivalTime: trajet.tempsArrivee,
      Prix: trajet.prix, //
    },
    null,
    2
  );
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
