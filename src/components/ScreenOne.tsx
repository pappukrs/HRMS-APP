import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MainStackParamList } from "../NavigationParamList";

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "One">,
    navigation: NativeStackNavigationProp<MainStackParamList, "One">,
};

export function ScreenOne({ navigation }: ScreenOneProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hello World!
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert("Tapped!")}
            >
                <Text style={styles.buttonText}>Tap me for an alert</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Two", { message: "Hello, world!" })}
            >
                <Text style={styles.buttonText}>Go to next screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    button: {
        marginVertical: 8,
        padding: 12,
    },
    buttonText: {
        fontSize: 24,
        color: '#2e6ddf',
    },
});
