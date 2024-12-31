import * as React from "react";
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Feather  from 'react-native-vector-icons/Feather';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../components/MainStack";

type WeeklyHours = {
  [key in 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun']?: string;
};

type TimeEntryData = {
  project: string;
  task?: string;
  totalHours: string;
  weeklyHours: WeeklyHours;
  color?: string;
};

type TimeSheetScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "TimeSheet">;
};

export function TimeSheetScreen({ navigation }: TimeSheetScreenProps) {
  const [entries] = React.useState<TimeEntryData[]>([
    {
      project: "Project x",
      task: "Development",
      totalHours: "16:00",
      color: "#E040FB",
      weeklyHours: {
        mon: "4:00",
        tue: "6:00",
        wed: "6:00",
      }
    },
    {
      project: "Vacation",
      totalHours: "16:00",
      color: "#FF9800",
      weeklyHours: {
        thu: "8:00",
        fri: "8:00",
      }
    },
    {
      project: "Break",
      totalHours: "4:00",
      color: "#2196F3",
      weeklyHours: {
        mon: "1:30",
        tue: "1:00",
        wed: "1:30",
      }
    },
    {
      project: "Office",
      totalHours: "4:00",
      color: "#4CAF50",
      weeklyHours: {}
    }
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      
      <View style={{ padding: 16, backgroundColor: 'white' }}>
           {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, marginLeft: 16, fontWeight: '500' }}>Timesheet</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
           
            <TouchableOpacity>
              <Feather name="search" size={24} style={{ marginRight: 16 }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="bell" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginTop: 16,
          marginHorizontal: 4
        }}>
          {/* left side */}
          <View>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>Dec 1 - Dec 7</Text>
            <Text style={{ fontSize: 16, fontWeight: '500', marginTop: 4 }}>Total: 40:00</Text>
          </View>
          
          {/* right side */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginRight: 16 }}>
              <Feather name="star" size={24} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity>
                <Feather name="chevron-left" size={20} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="chevron-right" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        
        

        {/* Week days header */}
        <Text style={{ fontSize: 12, color: '#666', marginTop: 16, marginBottom: 8 }}>TOTAL BY DAY</Text>
        <View style={{ flexDirection: 'row' }}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <View key={day} style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: '#666' }}>{day}</Text>
              <Text style={{ fontSize: 12, color: '#666', marginTop: 4 }}>8:00</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Time Entries */}
      <ScrollView style={{ marginTop: 8 }}>
        {entries.map((entry, index) => (
          <View key={index} style={{ 
            padding: 16,
            backgroundColor: 'white',
            marginBottom: 8,
            marginHorizontal: 8,
            borderRadius: 8,
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ 
                  fontSize: 16,
                  color: entry.color,
                  fontWeight: '500'
                }}>{entry.project}</Text>
                {entry.task && (
                  <Text style={{ color: '#666', fontSize: 14 }}> - {entry.task}</Text>
                )}
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 8, fontSize: 14 }}>{entry.totalHours}</Text>
                <Feather name="more-vertical" size={20} color="#666" />
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => (
                <View key={day} style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={{ fontSize: 12, color: '#666' }}>
                    {entry.weeklyHours[day as keyof WeeklyHours] || '-:-'}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Add Button */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('TimeSheetEntry')}
        style={{ position: 'absolute', bottom: 16, right: 16, backgroundColor: '#2F80ED', padding: 12, borderRadius: 100 }}
      >
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}