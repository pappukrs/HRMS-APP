import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  onTap: () => void;
  text: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ onTap, text, variant = 'primary' }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton
      ]}
      onPress={onTap}
    >
      <Text style={[
        styles.text,
        variant === 'primary' ? styles.primaryText : styles.secondaryText
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 16,
  },
  primaryButton: {
    backgroundColor: '#3B82F6', // blue-500
  },
  secondaryButton: {
    backgroundColor: '#E5E7EB', // gray-200
  },
  text: {
    textAlign: 'center',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#1F2937', // gray-800
  },
});