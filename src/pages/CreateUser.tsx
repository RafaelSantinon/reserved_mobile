import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../services/api'

export default function CreateUser() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [bornAt, setBornAt] = useState('');
  const [cellphone, setCellphone] = useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Informe os dados para criar usuário</Text>

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

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
      />

      <Text style={styles.label}>Data de nascimento</Text>
      <TextInput
        style={styles.input}
        onChangeText={setBornAt}
      />

      <Text style={styles.label}>Celular</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCellphone}
      />

      <RectButton style={styles.button} onPress={() => {
        api.post('user', {
          "type": 4,
          "email": email,
          "password": password,
          "name": name,
          "cellphone": cellphone,
          "bornAt": bornAt,
        }).then(response => {
    
          navigation.navigate('Home');
        }).catch(err => {
          if (err.status === 401) navigation.navigate('Login');
        });
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