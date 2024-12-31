import * as React from "react";
import { ScrollView,Modal,Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../components/MainStack";
import Icon from 'react-native-vector-icons/MaterialIcons';

import Calendar from '../components/Calendar';  // You'll need to create this custom calendar component

type NewLeaveScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "NewLeave">;
};

export function NewLeaveScreen({ navigation }: NewLeaveScreenProps) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [isDatePickerFor, setIsDatePickerFor] = React.useState<'start' | 'end'>('start');
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const calculateDays = () => {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const handleSubmit = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      navigation.goBack();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NEW LEAVE</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Type Section */}
        <View style={styles.section}>
          <Icon name="event" size={24} color="#4263EB" />
          <View style={styles.sectionContent}>
            <Text style={styles.sectionLabel}>Type</Text>
            <Text style={styles.sectionValue}>Casual</Text>
          </View>
        </View>

        {/* Cause Section */}
        <View style={styles.section}>
          <Icon name="description" size={24} color="#4263EB" />
          <View style={styles.sectionContent}>
            <Text style={styles.sectionLabel}>Cause</Text>
            <Text style={styles.sectionValue}>Trip to Cannes</Text>
          </View>
        </View>

        {/* From Date Section */}
        <TouchableOpacity 
          style={styles.section}
          onPress={() => {
            setIsDatePickerFor('start');
            setShowCalendar(true);
          }}
        >
          <Icon name="calendar-today" size={24} color="#4263EB" />
          <View style={styles.sectionContent}>
            <Text style={styles.sectionLabel}>From</Text>
            <Text style={styles.sectionValue}>
              {startDate.toLocaleDateString('en-US', { 
                weekday: 'short', 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Show Calendar if it's for start date */}
        {showCalendar && isDatePickerFor === 'start' && (
          <View style={styles.inlineCalendarContainer}>
            <Calendar
              selectedDate={startDate}
              onDateSelect={(date) => {
                setStartDate(date);
                setShowCalendar(false);
              }}
            />
          </View>
        )}

        {/* To Date Section */}
        <TouchableOpacity 
          style={styles.section}
          onPress={() => {
            setIsDatePickerFor('end');
            setShowCalendar(true);
          }}
        >
          <Icon name="calendar-today" size={24} color="#4263EB" />
          <View style={styles.sectionContent}>
            <Text style={styles.sectionLabel}>To</Text>
            <Text style={styles.sectionValue}>
              {endDate.toLocaleDateString('en-US', { 
                weekday: 'short', 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Show Calendar if it's for end date */}
        {showCalendar && isDatePickerFor === 'end' && (
          <View style={styles.inlineCalendarContainer}>
            <Calendar
              selectedDate={endDate}
              onDateSelect={(date) => {
                setEndDate(date);
                setShowCalendar(false);
              }}
            />
          </View>
        )}

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>
            Apply for {calculateDays()} Days Leave
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.successContent}>
            <Icon name="check-circle" size={64} color="#4CAF50" />
            <Text style={styles.successTitle}>Success!</Text>
            <Text style={styles.successText}>Leave request has been submitted</Text>
            <View style={styles.successDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Duration:</Text>
                <Text style={styles.detailValue}>{calculateDays()} Days</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>From:</Text>
                <Text style={styles.detailValue}>
                  {startDate.toLocaleDateString('en-US', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric'
                  })}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>To:</Text>
                <Text style={styles.detailValue}>
                  {endDate.toLocaleDateString('en-US', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric'
                  })}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  sectionContent: {
    marginLeft: 16,
  },
  sectionLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  sectionValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: '#4263EB',
    padding: 16,
    borderRadius: 8,
    marginTop: 32,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  calendarContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  successModal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  successContent: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
  },
  successText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    textAlign: 'center',
  },
  successDetails: {
    width: '100%',
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
    marginBottom: 8,
  },
  inlineCalendarContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});