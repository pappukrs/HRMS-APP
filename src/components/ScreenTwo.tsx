import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MainStackParamList } from "../NavigationParamList";

type ScreenTwoProps = {
    route: RouteProp<MainStackParamList, "Two">,
    navigation: NativeStackNavigationProp<MainStackParamList, "Two">,
};

export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                You're viewing screen two!
            </Text>
            <Text style={styles.text}>
                Message: {route.params.message}
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        color: 'black',
        marginBottom: 8,
    },
    button: {
        marginTop: 16,
        padding: 12,
    },
    buttonText: {
        fontSize: 24,
        color: '#2e6ddf',
    },
});
