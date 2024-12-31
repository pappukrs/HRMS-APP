import * as React from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { Appbar, Card, Avatar, IconButton } from 'react-native-paper';
import { theme } from '../theme';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList } from '../components/MainStack';

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

const services = [
  { id: 1, title: "Performance", icon: "chart-line", route: "Performance" },
  { id: 2, title: "Leave", icon: "calendar", route: "LeaveManagement" },
  { id: 3, title: "Evaluation", icon: "star", route: "Evaluation" },
  { id: 4, title: "TimeSheet", icon: "clock-outline", route: "TimeSheet" },
  { id: 5, title: "Attendance", icon: "calendar-check", route: "Attendance" },
  { id: 6, title: "Files", icon: "folder", route: "Files" },
];

const reportIcons = {
  leave: require('../assets/home/leave.png'),
  annual: require('../assets/home/annual.png'),
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Avatar.Image size={40} source={require('../assets/profile.png')} />
          <Text style={styles.headerTitle}>Home</Text>
        </View>
        <View style={styles.headerRight}>
          <IconButton icon="magnify" size={24} onPress={() => {}} />
          <IconButton icon="bell" size={24} onPress={() => {}} />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <Card style={styles.updateCard}>
          <View style={styles.updateContent}>
            <View style={styles.updateTextContainer}>
              <Text style={styles.updateTitle}>Update</Text>
              <Text style={styles.updateDescription}>
                is simply dummy text of the printing & typesetting industry.
              </Text>
            </View>
            <Image
              source={require('../assets/home/update.png')}
              style={styles.updateImage}
            />
          </View>
        </Card>

        <Card style={styles.timeCard}>
          <View style={styles.weatherIcons}>
            <Image
              source={require('../assets/home/left.png')}
              style={styles.weatherIcon}
            />
            <Image
              source={require('../assets/home/sun.png')}
              style={styles.weatherIcon}
            />
            <Image
              source={require('../assets/home/right.png')}
              style={styles.weatherIcon}
            />
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.timeBlock}>
              <Text style={styles.timeNumber}>00</Text>
            </View>
            <View style={styles.timeBlock}>
              <Text style={styles.timeNumber}>00</Text>
            </View>
            <View style={styles.timeBlock}>
              <Text style={styles.timeNumber}>00</Text>
            </View>
            <Text style={styles.timeUnit}>HRS</Text>
          </View>

          {/* Horizontal line */}
          <View style={styles.horizontalLine} />

          <Text style={styles.timeSchedule}>GENERAL 09:00 AM TO 06:00 PM</Text>
          <TouchableOpacity style={styles.checkInButton}>
            <Text style={styles.checkInText}>CHECK IN</Text>
          </TouchableOpacity>
        </Card>

        <Card style={styles.reportCard}>
          {[
            { title: 'Leave Report', icon: 'leave', route: 'LeaveReport' },
            { title: 'Annual Report', icon: 'annual', route: 'AnnualReport' },
            { title: 'Leave Request', icon: 'leave', route: 'LeaveRequest' },
            { title: 'Company Request', icon: 'annual', route: 'CompanyRequest' },
          ].map((report, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(report.route as keyof RootStackParamList)}
            >
              <View style={styles.reportContent}>
                <Image
                  source={reportIcons[report.icon as keyof typeof reportIcons]}
                  style={styles.reportIcon}
                />
                <Text style={styles.reportText}>{report.title}</Text>
              </View>
              {index < 3 && <View style={styles.divider} />}
            </TouchableOpacity>
          ))}
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  headerRight: {
    flexDirection: 'row',
  },
  scrollView: {
    padding: 16,
  },
  updateCard: {
    marginBottom: 16,
    backgroundColor:'#ffffff'
  },
  updateContent: {
    flexDirection: 'row',
    padding: 16,
  },
  updateTextContainer: {
    flex: 1,
  },
  updateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  updateDescription: {
    color: '#666',
  },
  updateImage: {
    width: 100,
    height: 110,
  },
  timeCard: {
    marginBottom: 16,
    padding: 16,
    backgroundColor:'#ffffff'
  },
  weatherIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  weatherIcon: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  timeBlock: {
    backgroundColor: '#ffebee',
    padding: 14,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  timeNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  timeUnit: {
    marginLeft: 8,
    fontSize: 16,
  },
  timeSchedule: {
    textAlign: 'center',
    marginBottom: 16,
  },
  checkInButton: {
    backgroundColor: '#4fc7b1',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width:'60%',
    alignSelf:'center'
  },
  checkInText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reportCard: {
    backgroundColor: '#ffffff',
  },
  reportContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  reportIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  reportText: {
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
  },
  horizontalLine: {
    height: 4,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
    width: '90%',
  },
});