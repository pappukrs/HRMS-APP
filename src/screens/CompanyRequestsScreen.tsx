import * as React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RequestCard } from "../components/RequestCard";

type RequestStatus = "Pending" | "Approved" | "Rejected";
type Request = {
  type: string;
  status: RequestStatus;
  description: string;
  date: string;
};

export function CompanyRequestsScreen() {
  const [requests] = React.useState<Request[]>([
    {
      type: "Salary Certificate",
      status: "Pending",
      description: "Request for bank loan",
      date: "Dec 20, 2023"
    },
    {
      type: "Employee Letter",
      status: "Approved",
      description: "Visa application",
      date: "Dec 15, 2023"
    }
  ]);

  return (
    <ScrollView style={{ backgroundColor: '#f9fafb', padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
        Company Requests
      </Text>
      
      {requests.map((request, index) => (
        <RequestCard key={index} request={request} />
      ))}

      <TouchableOpacity 
        style={{
          backgroundColor: '#3b82f6',
          padding: 16,
          borderRadius: 9999,
          marginTop: 16,
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white' }}>+ New Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}