import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const fetchUser = async(username) => {
        const response = await fetch(`http://78a3-2a01-e0a-505-5460-c17a-f528-6de5-aa9e.ngrok.io/api/users/${username}`);
        const data = await response.json();
        console.log(data);
    }

    fetchUser("Test");

    return ( 
    <View style = { styles.container } >
        <Text> exemple </Text> 
        <StatusBar style = "auto" / >
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});