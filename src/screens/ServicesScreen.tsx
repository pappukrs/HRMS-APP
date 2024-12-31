import * as React from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { ServiceCard } from "../components/ServiceCard";
import { navigate } from "../utils/navigationUtils";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, TabParamList } from "../components/MainStack";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Avatar, TextInput } from "react-native-paper";

const services = [
  { id: 1, title: "Performance", icon: "trophy", route: "Performance", color: '#FFA500', image: require('../assets/services/performance.png') },
  { id: 2, title: "Leave", icon: "calendar-alt", route: "LeaveManagement", color: '#4169E1', image: require('../assets/services/leave.png') },
  { id: 3, title: "Organization", icon: "star", route: "Evaluation", color: '#FFD700', image: require('../assets/services/star.png') },
  { id: 4, title: "TimeSheet", icon: "clock", route: "TimeSheet", color: '#00A86B', image: require('../assets/services/timesheet.png') },
  { id: 5, title: "Attendance", icon: "calendar-check", route: "Attendance", color: '#FF6B6B', image: require('../assets/services/attendance.png') },
  { id: 6, title: "Files", icon: "folder", route: "Files", color: '#FFB347', image: require('../assets/services/folder.png') },
];

type ServicesScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Services'>,
  NativeStackScreenProps<RootStackParamList>
>;

export function ServicesScreen({ navigation }: ServicesScreenProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
        <Avatar.Image size={40} source={require('../assets/profile.png')} />

          <Text style={styles.headerTitle}>Services</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon name="search" size={20} color="#000" style={styles.headerIcon} />
          <Icon name="bell" size={20} color="#000" style={styles.headerIcon} />
         
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search services"
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <Icon name="bars" size={20} color="#000" style={styles.menuIcon} />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.grid}>
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onPress={() => navigate(navigation, service.route)}
            />
          ))}
        </View>
      </ScrollView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 20,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginRight: 12,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'transparent',
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  menuIcon: {
    padding: 4,
  },
});