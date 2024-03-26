import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import BottomAppBar from "../navigation/AuthNavigator/appbar";
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
const HistoryScreen = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();

    };
    const fakeTickets = [
        {
            Id_réservation: 1,
            Date_rev: new Date('2024-03-25'),
            Price: 50.99,
            Destination: 'New York'
        },
        {
            Id_réservation: 2,
            Date_rev: new Date('2024-04-02'),
            Price: 75.50,
            Destination: 'London'
        },
        {
            Id_réservation: 3,
            Date_rev: new Date('2024-04-10'),
            Price: 120.75,
            Destination: 'Tokyo'
        },
        // Add more fake ticket objects as needed
    ];
    const renderItem = ({ item }) => (
        <View style={styles.ticketItem}>
            <Text style={styles.ticketTitle}>Reservation ID: {item.Id_réservation}</Text>
            <Text>Date: {item.Date_rev.toDateString()}</Text>
            <Text>Price: ${item.Price.toFixed(2)}</Text>
            <Text>Destination: {item.Destination}</Text>
        </View>
    );
    return (

        < SafeAreaView style={styles.container} >

            <View style={styles.header}>
                <HeaderBackButton

                    onPress={goBack} />
                <Text style={styles.texth} >History</Text>
            </View>
            <FlatList
                data={fakeTickets}
                renderItem={renderItem}
                keyExtractor={(item) => item.Id_réservation.toString()}
                style={styles.flatList}
            />




            <BottomAppBar />

        </SafeAreaView >
    )
}

export default HistoryScreen
