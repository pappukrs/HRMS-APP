import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LeaveRequestScreen = () => {
  const navigation = useNavigation();

  const pendingRequests = [
    {
      id: 1,
      name: 'Abhay Kumar',
      avatar: require('../assets/profile.png'),
      appliedDate: '19 Nov 2022',
      leaveDate: '19 Nov - 19 Nov 2022',
      duration: '1 day(s)',
      leaveBalance: '0 day(s)',
      reason: 'High fever',
      status: 'Sick Leave'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: require('../assets/profile.png'),
      appliedDate: '21 Nov 2022',
      leaveDate: '25 Dec - 31 Dec 2022',
      duration: '7 day(s)',
      leaveBalance: '15 day(s)',
      reason: 'Family vacation',
      status: 'Unpaid Leave'
    },
    {
      id: 3,
      name: 'Mike Chen',
      avatar: require('../assets/profile.png'),
      appliedDate: '22 Nov 2022',
      leaveDate: '23 Nov 2022',
      duration: '1 day(s)',
      leaveBalance: '2 day(s)',
      reason: 'Medical appointment',
      status: 'Medical Leave'
    },
    {
      id: 4,
      name: 'Priya Patel',
      avatar: require('../assets/profile.png'),
      appliedDate: '23 Nov 2022',
      leaveDate: '28 Nov - 29 Nov 2022',
      duration: '2 day(s)',
      leaveBalance: '5 day(s)',
      reason: 'Personal matters',
      status: 'Personal Leave'
    },
    {
      id: 5,
      name: 'James Wilson',
      avatar: require('../assets/profile.png'),
      appliedDate: '24 Nov 2022',
      leaveDate: '1 Dec - 2 Dec 2022',
      duration: '2 day(s)',
      leaveBalance: '8 day(s)',
      reason: 'Family event',
      status: 'Annual Leave'
    },
    {
      id: 6,
      name: 'Lisa Wong',
      avatar: require('../assets/profile.png'),
      appliedDate: '25 Nov 2022',
      leaveDate: '28 Nov 2022',
      duration: '1 day(s)',
      leaveBalance: '3 day(s)',
      reason: 'Dental surgery',
      status: 'Medical Leave'
    },
    {
      id: 7,
      name: 'Raj Malhotra',
      avatar: require('../assets/profile.png'),
      appliedDate: '26 Nov 2022',
      leaveDate: '5 Dec - 9 Dec 2022',
      duration: '5 day(s)',
      leaveBalance: '12 day(s)',
      reason: 'Wedding ceremony',
      status: 'Annual Leave'
    },
    {
      id: 8,
      name: 'Emma Thompson',
      avatar: require('../assets/profile.png'),
      appliedDate: '27 Nov 2022',
      leaveDate: '30 Nov 2022',
      duration: '1 day(s)',
      leaveBalance: '4 day(s)',
      reason: 'Moving house',
      status: 'Personal Leave'
    },
    {
      id: 9,
      name: 'David Kim',
      avatar: require('../assets/profile.png'),
      appliedDate: '28 Nov 2022',
      leaveDate: '29 Nov 2022',
      duration: '1 day(s)',
      leaveBalance: '1 day(s)',
      reason: 'Food poisoning',
      status: 'Sick Leave'
    },
    {
      id: 10,
      name: 'Maria Garcia',
      avatar: require('../assets/profile.png'),
      appliedDate: '29 Nov 2022',
      leaveDate: '15 Dec - 16 Dec 2022',
      duration: '2 day(s)',
      leaveBalance: '6 day(s)',
      reason: 'Family emergency',
      status: 'Emergency Leave'
    },
    {
      id: 11,
      name: 'Tom Anderson',
      avatar: require('../assets/profile.png'),
      appliedDate: '30 Nov 2022',
      leaveDate: '12 Dec - 14 Dec 2022',
      duration: '3 day(s)',
      leaveBalance: '9 day(s)',
      reason: 'Training workshop',
      status: 'Professional Leave'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leave Requests</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="search" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="notifications" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>PENDING REQUESTS</Text>
        <Text style={styles.tab}>HISTORY</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {pendingRequests.map((request) => (
          <View key={request.id} style={styles.requestCard}>
            <View style={styles.requestHeader}>
              <View style={styles.leftHeader}>
                <Image source={request.avatar} style={styles.avatar} />
                <View>
                  <Text style={styles.name}>{request.name}</Text>
                  <Text style={styles.leaveType}>{request.status}</Text>
                </View>
              </View>
              <View style={styles.appliedDate}>
                <Text style={styles.appliedLabel}>Applied on</Text>
                <Text style={styles.dateText}>19 Nov 2022</Text>
              </View>
            </View>

            <View style={styles.requestDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Leave Date</Text>
                <Text style={styles.valueText}>{request.leaveDate}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Duration</Text>
                <Text style={styles.valueText}>{request.duration}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Leave Balance</Text>
                <Text style={styles.valueText}>{request.leaveBalance}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Reason</Text>
                <Text style={styles.valueText}>{request.reason}</Text>
              </View>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity style={[styles.button, styles.approveButton]}>
                <Text style={[styles.buttonText, styles.approveText]}>APPROVE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.rejectButton]}>
                <Text style={[styles.buttonText, styles.rejectText]}>REJECT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.editButton]}>
                <Text style={[styles.buttonText, styles.editText]}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    padding: 16,
    color: '#666',
  },
  activeTab: {
    padding: 16,
    color: '#000',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  requestCard: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  leaveType: {
    color: '#2F80ED',
    fontSize: 13,
    borderWidth: 1,
    borderColor: '#2F80ED',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontWeight:'800'
  },
  appliedDate: {
    alignItems: 'flex-end',
  },
  appliedLabel: {
    fontSize: 12,
    color: '#666',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
  requestDetails: {
    gap: 8,
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: '#666',
    fontSize: 13,
  },
  valueText: {
    color: '#000',
    fontSize: 13,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 8,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  approveButton: {
    backgroundColor: '#e8f5e9',
  },
  rejectButton: {
    backgroundColor: '#ffebee',
  },
  editButton: {
    backgroundColor: '#f5f5f5',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
  },
  approveText: {
    color: '#2e7d32',
  },
  rejectText: {
    color: '#c62828',
  },
  editText: {
    color: '#666',
  },
  scrollView: {
    flex: 1,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcon: {
    padding: 8,
  },
});

export default LeaveRequestScreen;
