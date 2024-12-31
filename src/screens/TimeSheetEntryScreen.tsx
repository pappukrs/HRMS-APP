import * as React from "react";
import { View, ScrollView, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import { goBack } from "../utils/navigationUtils";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../components/MainStack";
import Icon from 'react-native-vector-icons/MaterialIcons';

type TimeSheetEntryScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "TimeSheetEntry">;
};

export function TimeSheetEntryScreen({ navigation }: TimeSheetEntryScreenProps) {
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());
  const [showTimePicker, setShowTimePicker] = React.useState(true);
  const [activeTimeField, setActiveTimeField] = React.useState<'start' | 'end' | null>(null);
  const [project, setProject] = React.useState("None");
  const [task, setTask] = React.useState("None");
  const [tags, setTags] = React.useState("None");
  const [workingStatus, setWorkingStatus] = React.useState("Working");
  const [selectedHour, setSelectedHour] = React.useState(0);
  const [selectedMinute, setSelectedMinute] = React.useState(0);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const handleTimeSelect = () => {
    const newDate = new Date();
    newDate.setHours(selectedHour);
    newDate.setMinutes(selectedMinute);
    
    if (activeTimeField === 'start') {
      setStartTime(newDate);
    } else {
      setEndTime(newDate);
    }
    setShowTimePicker(false);
  };

  const renderTimeColumn = (
    data: number[],
    selectedValue: number,
    onSelect: (value: number) => void,
    padZero = true
  ) => (
    <ScrollView 
      style={styles.timeColumn}
      showsVerticalScrollIndicator={false}
      snapToInterval={40}
      decelerationRate="fast"
    >
      <View style={styles.timeColumnPadding} />
      {data.map((value) => (
        <TouchableOpacity
          key={value}
          style={[
            styles.timeItem,
            selectedValue === value && styles.selectedTimeItem
          ]}
          onPress={() => onSelect(value)}
        >
          <Text style={[
            styles.timeItemText,
            selectedValue === value && styles.selectedTimeItemText
          ]}>
            {padZero ? value.toString().padStart(2, '0') : value}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={styles.timeColumnPadding} />
    </ScrollView>
  );

  const formatDateTime = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${dayName}, ${monthName} ${day} ${hours}:${minutes}`;
  };

  const handleTimePress = (field: 'start' | 'end') => {
    setActiveTimeField(field);
    setShowTimePicker(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add entry</Text>
        <TouchableOpacity>
          <Text style={styles.discardText}>DISCARD</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timeSection}>
        <View style={styles.timeRow}>
          <Text style={styles.timeLabel}>Start</Text>
          <TouchableOpacity onPress={() => handleTimePress('start')}>
            <Text style={styles.timeText}>{formatDateTime(startTime)}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.timeRow}>
          <Text style={styles.timeLabel}>End</Text>
          <TouchableOpacity onPress={() => handleTimePress('end')}>
            <Text style={styles.timeText}>{formatDateTime(endTime)}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {showTimePicker && (
        <View style={styles.timePickerContainer}>
          <View style={styles.timePickerHeader}>
            <Text style={styles.timePickerLabel}>Select Time</Text>
            <TouchableOpacity onPress={handleTimeSelect}>
              <Text style={styles.confirmButton}>Confirm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timePickerContent}>
            <View style={styles.timePickerColumns}>
              {renderTimeColumn(hours, selectedHour, setSelectedHour)}
              {renderTimeColumn(minutes, selectedMinute, setSelectedMinute)}
            </View>
            <View style={styles.selectionHighlight} />
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.listItem}>
        <Icon name="work" size={24} style={styles.listIcon} />
        <View style={styles.listContent}>
          <Text style={styles.listLabel}>Working</Text>
          <Text>{workingStatus}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <Icon name="folder" size={24} style={styles.listIcon} />
        <View style={styles.listContent}>
          <Text style={styles.listLabel}>Project</Text>
          <Text>{project}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <Icon name="assignment" size={24} style={styles.listIcon} />
        <View style={styles.listContent}>
          <Text style={styles.listLabel}>Task</Text>
          <Text>{task}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <Icon name="local-offer" size={24} style={styles.listIcon} />
        <View style={styles.listContent}>
          <Text style={styles.listLabel}>Tags</Text>
          <Text>{tags}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.submitButton}
        onPress={() => navigation.navigate('TimeSheet')}
      >
        <Icon name="check" size={24} color="white" />
      </TouchableOpacity>
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
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  discardText: {
    color: '#666',
  },
  timeSection: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  timeLabel: {
    fontWeight: '500',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  listIcon: {
    marginRight: 16,
    color: '#666',
  },
  listContent: {
    flex: 1,
  },
  listLabel: {
    fontWeight: '500',
    marginBottom: 4,
  },
  submitButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  timeText: {
    color: '#333',
    fontSize: 14,
  },
  timePickerContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  timePickerContent: {
    flex: 1,
    position: 'relative',
  },
  timePickerColumns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeColumn: {
    flex: 1,
    maxWidth: 80,
  },
  timeColumnPadding: {
    height: 80,
  },
  timeItem: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTimeItem: {
    backgroundColor: 'transparent',
  },
  timeItemText: {
    fontSize: 20,
    color: '#666',
  },
  selectedTimeItemText: {
    color: '#2196F3',
    fontWeight: '600',
  },
  selectionHighlight: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: '#f0f7ff',
    transform: [{ translateY: -20 }],
    zIndex: -1,
  },
  timePickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  timePickerLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  confirmButton: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '500',
  },
});