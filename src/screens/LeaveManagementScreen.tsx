import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LeaveCard } from "../components/LeaveCard";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../components/MainStack";
import Icon from 'react-native-vector-icons/Ionicons';

type LeaveStatus = "Approved" | "Pending" | "Rejected";
type Leave = {
  type: string;
  status: LeaveStatus;
  date: string;
  duration: string;
};

type LeaveManagementScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "LeaveManagement">;
};

export function LeaveManagementScreen({ navigation }: LeaveManagementScreenProps) {
  const [selectedTab, setSelectedTab] = React.useState('All');
  const [leaves] = React.useState([
    {
      type: "Half Day Application",
      status: "Awaiting",
      date: "Wed, 16 Dec",
      category: "Casual",
      month: "December 2022"
    },
    {
      type: "Full Day Application",
      status: "Approved",
      date: "Mon, 16 Nov",
      category: "Sick",
      month: "December 2022"
    },
    {
      type: "Full Day Application",
      status: "Approved",
      date: "Thu, 10 Nov",
      category: "Casual",
      month: "November 2022"
    },
    {
      type: "Half Day Application",
      status: "Declined",
      date: "Mon, 7 Nov",
      category: "Sick",
      month: "November 2022"
    },
    {
      type: "Full Day Application",
      status: "Awaiting",
      date: "Fri, 28 Oct",
      category: "Casual",
      month: "October 2022"
    },
    {
      type: "Full Day Application",
      status: "Approved",
      date: "Wed, 19 Oct",
      category: "Sick",
      month: "October 2022"
    },
    {
      type: "Half Day Application",
      status: "Declined",
      date: "Mon, 10 Oct",
      category: "Casual",
      month: "October 2022"
    },
    {
      type: "Full Day Application",
      status: "Approved",
      date: "Thu, 22 Sep",
      category: "Sick",
      month: "September 2022"
    },
    {
      type: "Half Day Application",
      status: "Approved",
      date: "Wed, 14 Sep",
      category: "Casual",
      month: "September 2022"
    },
    {
      type: "Full Day Application",
      status: "Awaiting",
      date: "Mon, 5 Sep",
      category: "Sick",
      month: "September 2022"
    },
    {
      type: "Full Day Application",
      status: "Approved",
      date: "Fri, 26 Aug",
      category: "Casual",
      month: "August 2022"
    },
    {
      type: "Half Day Application",
      status: "Declined",
      date: "Tue, 16 Aug",
      category: "Sick",
      month: "August 2022"
    }
  ]);

  const filteredLeaves = leaves.filter(leave => 
    selectedTab === 'All' || leave.category === selectedTab
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>LEAVES</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate("NewLeave")}
          >
            <Icon name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {['All', 'Casual', 'Sick'].map((tab, index) => (
          <TouchableOpacity 
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && styles.selectedTab,
              index === 0 && styles.firstTab,
              index === 2 && styles.lastTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            {tab === 'Casual' && <View style={[styles.dot, { backgroundColor: '#FFA500' }]} />}
            {tab === 'Sick' && <View style={[styles.dot, { backgroundColor: '#5B5BFF' }]} />}
            <Text style={[
              styles.tabText,
              selectedTab === tab && styles.selectedTabText
            ]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Leave List */}
      <ScrollView style={styles.leaveList}>
        {filteredLeaves.map((leave, index) => (
          <React.Fragment key={index}>
            {index === 0 || leaves[index - 1].month !== leave.month ? (
              <Text style={styles.monthHeader}>{leave.month}</Text>
            ) : null}
            <TouchableOpacity style={styles.leaveCard}>
              <View>
                <Text style={styles.leaveType}>{leave.type}</Text>
                <Text style={styles.leaveDate}>{leave.date}</Text>
                <Text style={[
                  styles.leaveCategory,
                  { color: leave.category === 'Sick' ? '#5B5BFF' : '#FFA500' }
                ]}>{leave.category}</Text>
              </View>
              <View style={styles.rightContent}>
                <View style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusColor(leave.status) }
                ]}>
                  <Text style={styles.statusText}>{leave.status}</Text>
                </View>
                <Icon name="chevron-forward" size={20} color="#666" />
              </View>
            </TouchableOpacity>
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Approved': return '#E8F5E9';
    case 'Awaiting': return '#FFF3E0';
    case 'Declined': return '#FFEBEE';
    default: return '#E0E0E0';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    padding: 8,
  },
  addButton: {
    backgroundColor: '#5B5BFF',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 6,
  },
  firstTab: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderRightWidth: 0,
  },
  lastTab: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderLeftWidth: 0,
  },
  selectedTab: {
    backgroundColor: '#E8E8E8',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  tabText: {
    color: '#666',
  },
  selectedTabText: {
    color: '#000',
    fontWeight: '500',
  },
  leaveList: {
    flex: 1,
    padding: 16,
  },
  monthHeader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  leaveCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  leaveType: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  leaveDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  leaveCategory: {
    fontSize: 14,
  },
  rightContent: {
    alignItems: 'flex-end',
    gap: 8,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 12,
    color: '#666',
  },
});