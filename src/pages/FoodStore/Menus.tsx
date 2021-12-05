import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import MenuBar from '../../components/MenuBar';

export default function Menus() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RectButton style={styles.button} onPress={() => {
        navigation.navigate('MenuDetails')
      }}>
        <Text style={styles.buttonText}>Entradas</Text>
      </RectButton>

      <RectButton style={styles.button} onPress={() => {
        navigation.navigate('MenuDetails')
      }}>
        <Text style={styles.buttonText}>Pranto principal</Text>
      </RectButton>

      <RectButton style={styles.button} onPress={() => {
        navigation.navigate('MenuDetails')
      }}>
        <Text style={styles.buttonText}>Sobremesa</Text>
      </RectButton>

      <RectButton style={styles.button} onPress={() => {
        navigation.navigate('MenuDetails')
      }}>
        <Text style={styles.buttonText}>Bebidas</Text>
      </RectButton>

      <MenuBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    backgroundColor: '#4e3333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 20,
  },

  buttonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    color: 'white',
  },
})