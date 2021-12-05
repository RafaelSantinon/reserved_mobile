import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Logo from '../images/logo.png';

export default function Login() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />

      <Text style={styles.title}>Informe os dados</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
      />

      <RectButton style={styles.loginButton} onPress={() => {
        navigation.navigate('Home')
      }}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </RectButton>

      <RectButton style={styles.createButton} onPress={() => {
        navigation.navigate('CreateUser')
      }}>
        <Text style={styles.createButtonText}>Cadastrar</Text>
      </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 70,
  },

  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
    marginLeft: 80,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
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

  loginButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 20,
  },

  loginButtonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    color: 'white',
  },

  createButton: {
    backgroundColor: '#4e3333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 20,
  },

  createButtonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    color: 'white',
  }
})