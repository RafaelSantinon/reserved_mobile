import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="white" />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#4e3333',
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingTop: 36,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  title: {
    fontFamily: 'Roboto_500Medium',
    color: 'white',
    fontSize: 20,
  },
})
