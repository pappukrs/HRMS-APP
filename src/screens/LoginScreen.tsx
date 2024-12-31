import * as React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../components/MainStack";
import { TextInput, Button, Surface, Checkbox } from 'react-native-paper';

type LoginScreenProps = {
  route: RouteProp<RootStackParamList, "Login">;
  navigation: StackNavigationProp<RootStackParamList, "Login">;
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftEllipse} />
        <View style={styles.rightEllipse} />
        <Text style={styles.logoText}>Mv HRMS</Text>
        <View style={styles.logoWrapper}>
          <Image 
            source={require('../assets/login/center.png')}
            style={styles.logoImage}
          />
        </View>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          style={[styles.input, styles.emailInput]}
          theme={{ colors: { primary: '#40C9B5' } }}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          style={[styles.input, styles.passwordInput]}
          theme={{ colors: { primary: '#40C9B5' } }}
        />

        <View style={styles.rememberMeContainer}>
          <View style={styles.checkboxRow}>
            <Checkbox
              status={rememberMe ? 'checked' : 'unchecked'}
              onPress={() => setRememberMe(!rememberMe)}
              color="#40C9B5"
            />
            <Text style={styles.rememberMeText}>Remember Me</Text>
          </View>
        </View>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('MainTabs')}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Login
        </Button>

        <View style={styles.bottomButtons}>
          <Button 
            mode="text" 
            onPress={() => {}}
            textColor="#2196F3"
          >
            Forgot Password?
          </Button>
          <Button 
            mode="text" 
            onPress={() => {}}
            textColor="#000000"
          >
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerContainer: {
    height: '40%',
    position: 'relative',
    marginBottom:35
  },
  leftEllipse: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '60%',
    height: '90%',
    backgroundColor: '#FF8C42',
    borderBottomRightRadius: 150,
  },
  rightEllipse: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '60%',
    height: '70%',
    backgroundColor: '#1A237E',
    borderBottomLeftRadius: 150,
  },
  logoWrapper: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [{ translateX: -30 }],
    alignItems: 'center',
  },
  logoText: {
    position: 'absolute',
    top: 40,
    right: 20,
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    zIndex: 1,
  },
  logoImage: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
  formContainer: {
    padding: 24,
    marginHorizontal: 20,
    marginTop: -60,
    backgroundColor: '#ffffff',
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  emailInput: {
    marginBottom: 24,
  },
  passwordInput: {
    marginBottom: 8,
  },
  rememberMeContainer: {
    marginBottom: 32,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 8,
    fontSize: 14,
  },
  button: {
    marginBottom: 24,
    backgroundColor: '#40C9B5',
    borderRadius: 8,
  },
  buttonContent: {
    height: 48,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
});