import * as React from "react";
import { View, Text } from "react-native";
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList } from '../components/MainStack';
import { RootStackParamList } from "../types/navigation";

type MoreScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'More'>,
  NativeStackScreenProps<RootStackParamList>
>;

export function MoreScreen({ navigation }: MoreScreenProps) {
  return (
    <View>
      <Text>More Screen</Text>
    </View>
  );
} 