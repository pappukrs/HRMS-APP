import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from "react";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { ServicesScreen } from "../screens/ServicesScreen";
import { TimeSheetScreen } from "../screens/TimeSheetScreen";
import { TimeSheetEntryScreen } from "../screens/TimeSheetEntryScreen";
import { LeaveManagementScreen } from "../screens/LeaveManagementScreen";
import { NewLeaveScreen } from "../screens/NewLeaveScreen";
import { CompanyRequestsScreen } from "../screens/CompanyRequestsScreen";
import { MoreScreen } from "../screens/MoreScreen";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LeaveRequestScreen from '../screens/LeaveRequestScreen';
import CompanyRequest from '../screens/CompanyRequest';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  MainTabs: undefined;
  TimeSheet: undefined;
  TimeSheetEntry: undefined;
  LeaveManagement: undefined;
  NewLeave: undefined;
  LeaveRequest: undefined;
  CompanyRequest: undefined;
  LeaveReport: undefined;
  AnnualReport: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Add TabNavigator
export type TabParamList = {
  Home: undefined;
  Services: undefined;
  Approvals: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const ACTIVE_COLOR = '#FF9F0A'; 
const INACTIVE_COLOR = '#8E8E93';
const ICON_SIZE = 24;

// TabNavigator component
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: 'rgba(24, 24, 24, 0.95)',
          borderTopWidth: 0,
          elevation: 0, 
        },
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '400',
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" size={ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Services" 
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="grid-view" size={ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Approvals" 
        component={LeaveRequestScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="fact-check" size={ICON_SIZE} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="More" 
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="menu" size={ICON_SIZE} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="TimeSheet" component={TimeSheetScreen} />
      <Stack.Screen name="TimeSheetEntry" component={TimeSheetEntryScreen} />
      <Stack.Screen name="LeaveManagement" component={LeaveManagementScreen} />
      <Stack.Screen name="NewLeave" component={NewLeaveScreen} />
        <Stack.Screen name="LeaveRequest" component={LeaveRequestScreen} />
        <Stack.Screen name="CompanyRequest" component={CompanyRequest} />
    </Stack.Navigator>
  </NavigationContainer>
);