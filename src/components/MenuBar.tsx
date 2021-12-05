import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export default function MenuBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('History')
      }}>
        <Feather 
          name="menu" 
          size={30} 
          style={{ marginLeft: 30 }} 
          color="#FFF"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Home')
      }}>
        <Feather
          name="home" 
          size={30} 
          color="#FFF" 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Feather
          name="user"
          size={30}
          style={{ marginRight: 30 }}
          color="#FFF"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#4e3333',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
});