import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { formatDate } from "../utils/dateUtils";

type Week = Date[];

export function TimeSheetCalendar({ selectedDate, onDateSelect }: { selectedDate: Date; onDateSelect: (date: Date) => void }) {
  const weeks: Week[] = [/* Generate calendar weeks */];
  
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <Text key={day} style={styles.dayLabel}>{day}</Text>
        ))}
      </View>
      
      {weeks.map((week, i) => (
        <View key={i} style={styles.weekRow}>
          {week.map(date => (
            <TouchableOpacity 
              key={date.toISOString()}
              onPress={() => onDateSelect(date)}
              style={[
                styles.dateCell,
                selectedDate === date && styles.selectedDate
              ]}
            >
              <Text style={[
                styles.dateText,
                selectedDate === date && styles.selectedDateText
              ]}>
                {formatDate(date)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekRow: {
    flexDirection: 'row',
  },
  dayLabel: {
    flex: 1,
    textAlign: 'center',
    color: '#6B7280', // text-gray-500
  },
  dateCell: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  selectedDate: {
    backgroundColor: '#3B82F6', // bg-blue-500
    borderRadius: 4,
  },
  dateText: {
    textAlign: 'center',
  },
  selectedDateText: {
    color: 'white',
  },
});