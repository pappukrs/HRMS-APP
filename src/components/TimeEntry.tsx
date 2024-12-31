import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

type TimeEntryProps = {
  entry: {
    project: string;
    hours: number;
    task: string;
  };
};

export function TimeEntry({ entry }: TimeEntryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.projectText}>{entry.project}</Text>
        <Text style={styles.hoursText}>{entry.hours}h</Text>
      </View>
      <Text style={styles.taskText}>{entry.task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projectText: {
    fontWeight: 'bold',
  },
  hoursText: {
    color: '#3B82F6',
  },
  taskText: {
    color: '#6B7280',
    marginTop: 4,
  },
});