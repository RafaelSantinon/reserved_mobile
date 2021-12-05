import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function CreateUser() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Informe os dados para criar usuário</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Data de nascimento</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Celular</Text>
      <TextInput
        style={styles.input}
      />

      <RectButton style={styles.button} onPress={() => {
        navigation.navigate('Home')
      }}>
        <Text style={styles.buttonText}>Criar</Text>
      </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 30,
  },

  title: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    marginBottom: 20,
  },

  label: {
    color: 'black',
    fontFamily: 'Roboto_500Medium',
    marginBottom: 8,
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
    marginTop: 20,
  },

  buttonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    color: 'white',
  },
})