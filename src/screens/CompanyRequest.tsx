import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import  Ionicons  from 'react-native-vector-icons/Ionicons' // Assuming you're using Expo icons
import { useNavigation } from '@react-navigation/native';

const CompanyRequest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.headerTitle}>Company Requests</Text>
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>REPORTS</Text>
        <Text style={styles.inactiveTab}>DOWNLOADS</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Attendance Section */}
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>Attendance</Text>
          <Ionicons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.subItems}>
          <Text style={styles.subItem}>Attendance Summary Report</Text>
          <Text style={styles.subItem}>Detailed Attendance Report</Text>
          <Text style={styles.subItem}>Late Arrival Report</Text>
          <Text style={styles.subItem}>Leave Report</Text>
          <Text style={styles.subItem}>Overtime Report</Text>
        </View>

        {/* Other Sections */}
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>Salary</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>Employee List</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    padding: 16,
  },
  backButton: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 8,
    fontWeight: '500',
  },
  headerRight: {
    flexDirection: 'row' as const,
    gap: 16,
  },
  tabs: {
    flexDirection: 'row' as const,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  activeTab: {
    color: '#00BFA5',
    padding: 16,
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: '#00BFA5',
  },
  inactiveTab: {
    color: '#666',
    padding: 16,
  },
  content: {
    padding: 16,
  },
  section: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  subItems: {
    paddingLeft: 16,
  },
  subItem: {
    paddingVertical: 8,
    color: '#666',
  },
})

export default CompanyRequest
