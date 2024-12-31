import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from "../utils/dateUtils";

interface DatePickerProps {
  label: string;
  date: Date;
  onDateChange: (date: Date) => void;
  style?: object;
}

export function DatePicker({ label, date, onDateChange, style }: DatePickerProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => {
          if (selectedDate) {
            onDateChange(selectedDate);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  label: {
    color: '#4B5563', // text-gray-600
    marginBottom: 8,
  },
});