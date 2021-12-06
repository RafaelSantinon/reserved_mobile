import { useNavigation } from '@react-navigation/core';
import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../services/api'

import Logo from '../images/logo.png';

import { AuthContext } from '../routes'

export default function Login() {
  const navigation = useNavigation();

  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />

      <Text style={styles.title}>Informe os dados</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
      />

      <RectButton style={styles.loginButton} onPress={() => {
        api.post('login', {
          "email": email,
          "password": password,
        }).then(response => {
          setAuth(response.data);
    
          navigation.navigate('Home');
        }).catch(err => {
          if (err.status === 401) navigation.navigate('Login');
        });
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