import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

interface ServiceCardProps {
  service: {
    title: string;
    image: any;
    color: string;
  };
  onPress: () => void;
}

export function ServiceCard({ service, onPress }: ServiceCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image 
        source={service.image}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{service.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 120,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#333',
  },
});