import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import BottomAppBar from "../../BottomNavBar";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Do you want to take?</Text>
      <Card
        text="BUS"
        image={require("../../../assets/bus.png")}
        onPressButton={() => {
          navigation.navigate("ChooseStation" as never);
        }}
      />
      <Card
        text="METRO"
        image={require("../../../assets/Metro.png")}
        onPressButton={() => {
          console.log(" Bouton pressé sur la deuxième carte");
        }}
      />
      <BottomAppBar />
    </View>
  );
};

const Card = ({ text, image, onPressButton }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={onPressButton} style={styles.button}>
        <Text style={styles.textboutton}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
