import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

interface RequestCardProps {
  request: {
    type: string;
    status: 'Approved' | 'Pending' | 'Rejected';
    description: string;
    date: string;
  }
}

export function RequestCard({ request }: RequestCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return styles.statusGreen;
      case 'Pending':
        return styles.statusOrange;
      default:
        return styles.statusRed;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.type}>{request.type}</Text>
        <Text style={[styles.status, getStatusColor(request.status)]}>
          {request.status}
        </Text>
      </View>
      <Text style={styles.description}>{request.description}</Text>
      <Text style={styles.date}>{request.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  type: {
    fontWeight: 'bold',
  },
  status: {
    fontWeight: '500',
  },
  statusGreen: {
    color: '#22C55E', // text-green-500
  },
  statusOrange: {
    color: '#F97316', // text-orange-500
  },
  statusRed: {
    color: '#EF4444', // text-red-500
  },
  description: {
    color: '#6B7280', // text-gray-500
    marginTop: 4,
  },
  date: {
    color: '#6B7280', // text-gray-500
  },
});