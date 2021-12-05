import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import MenuBar from '../../components/MenuBar';

export default function Reserves() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Mesa: 01</Text>
          <Text style={styles.description} >Lugares: 10</Text>
          <Text style={styles.description} >Status: Livre</Text>

          <Text style={styles.description}>Nome na reserva: </Text>
          <TextInput
            style={styles.input}
          />

          <RectButton style={styles.button} onPress={() => {
            navigation.navigate('Home')
          }}>
            <Text style={styles.buttonText}>Reservar</Text>
          </RectButton>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Mesa: 01</Text>
          <Text style={styles.description} >Lugares: 10</Text>
          <Text style={styles.description} >Status: Livre</Text>

          <Text style={styles.description}>Nome na reserva: </Text>
          <TextInput
            style={styles.input}
          />

          <RectButton style={styles.button} onPress={() => {
            navigation.navigate('Home')
          }}>
            <Text style={styles.buttonText}>Reservar</Text>
          </RectButton>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Mesa: 01</Text>
          <Text style={styles.description} >Lugares: 10</Text>
          <Text style={styles.description} >Status: Livre</Text>

          <Text style={styles.description}>Nome na reserva: </Text>
          <TextInput
            style={styles.input}
          />

          <RectButton style={styles.button} onPress={() => {
            navigation.navigate('Home')
          }}>
            <Text style={styles.buttonText}>Reservar</Text>
          </RectButton>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Mesa: 01</Text>
          <Text style={styles.description} >Lugares: 10</Text>
          <Text style={styles.description} >Status: Livre</Text>

          <Text style={styles.description}>Nome na reserva: </Text>
          <TextInput
            style={styles.input}
          />

          <RectButton style={styles.button} onPress={() => {
            navigation.navigate('Home')
          }}>
            <Text style={styles.buttonText}>Reservar</Text>
          </RectButton>
        </View>

        <View style={{ marginBottom: 80 }}></View>
      </ScrollView>

      <MenuBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  detailsContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 16
  },

  description: {
    padding: 4,
    fontFamily: 'Roboto_500Medium',
    color: 'black',
    lineHeight: 24,
    fontSize: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 12,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#4e3333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },

  buttonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    color: 'white',
  },
})