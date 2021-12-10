import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, SearchBar } from 'react-native-elements';



export default function App() {
    const fetchUser = async (username) => {
        const response = await fetch(`http://9f00-2a01-e0a-505-5460-5806-e01c-55cd-1d07.ngrok.io/api/users/${username}`);
        const data = await response.json();
        console.log(data);
    }

    fetchUser("Test");

    return (
        <SafeAreaProvider>
            <Header 
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'GitSearch', style: { color: '#fff' } }}
                rightComponent={{ icon: 'search', color: '#fff' }}
            />
        </SafeAreaProvider>
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