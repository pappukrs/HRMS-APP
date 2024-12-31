import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import  LinearGradient  from "react-native-linear-gradient";
import { RootStackParamList } from "../types/navigation";

type WelcomeScreenProps = {
  route: RouteProp<RootStackParamList, "Welcome">;
  navigation: StackNavigationProp<RootStackParamList, "Welcome">;
};

export function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={require("../assets/hrms-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.logo}>My HRMS</Text>
      </View>

      {/* Main Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../assets/welcome.png")}
          style={styles.illustration}
        />
      </View>

      {/* Bottom Content */}
      <View style={styles.bottomContent}>
        <LinearGradient
          colors={["#F2994A", "#F2994A"]}
          style={styles.gradientContainer}
        >
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.description}>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCEBDB", // Light peach background
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '100%',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  logo: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
  illustrationContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 0,
    marginBottom: -40,
  },
  illustration: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  bottomContent: {
    width: '100%',
    height: '35%',
  },
  gradientContainer: {
    flex: 1,
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 24,
    opacity: 0.8,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
});
