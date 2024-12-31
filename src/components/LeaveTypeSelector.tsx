import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

interface LeaveTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (type: string) => void;
}

export function LeaveTypeSelector({ selectedType, onTypeSelect }: LeaveTypeSelectorProps) {
  const leaveTypes = [
    "Annual Leave",
    "Sick Leave",
    "Personal Leave",
    "Other"
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Leave Type</Text>
      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue) => onTypeSelect(itemValue)}
        style={styles.picker}
      >
        {leaveTypes.map((type) => (
          <Picker.Item key={type} label={type} value={type} />
        ))}
      </Picker>
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
  picker: {
    width: '100%',
  },
});