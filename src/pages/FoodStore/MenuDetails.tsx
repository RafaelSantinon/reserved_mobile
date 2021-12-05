import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import MenuBar from '../../components/MenuBar';

export default function MenuDetails() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Item: Salada</Text>
          <Text style={styles.description} >Descrição: efijgeçoguwuoibheroçwbjnreouibjhwrouibjhrouibhrwoubhroub</Text>
          <Text style={styles.description} >Preço: 10,00</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Item: Salada</Text>
          <Text style={styles.description} >Descrição: efijgeçoguwuoibheroçwbjnreouibjhwrouibjhrouibhrwoubhroub</Text>
          <Text style={styles.description} >Preço: 10,00</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Item: Salada</Text>
          <Text style={styles.description} >Descrição: efijgeçoguwuoibheroçwbjnreouibjhwrouibjhrouibhrwoubhroub</Text>
          <Text style={styles.description} >Preço: 10,00</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Item: Salada</Text>
          <Text style={styles.description} >Descrição: efijgeçoguwuoibheroçwbjnreouibjhwrouibjhrouibhrwoubhroub</Text>
          <Text style={styles.description} >Preço: 10,00</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Item: Salada</Text>
          <Text style={styles.description} >Descrição: efijgeçoguwuoibheroçwbjnreouibjhwrouibjhrouibhrwoubhroub</Text>
          <Text style={styles.description} >Preço: 10,00</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Item: Salada</Text>
          <Text style={styles.description} >Descrição: efijgeçoguwuoibheroçwbjnreouibjhwrouibjhrouibhrwoubhroub</Text>
          <Text style={styles.description} >Preço: 10,00</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.description} >Item: Salada</Text>
          <Text style={styles.description} >Descrição: efijgeçoguwuoibheroçwbjnreouibjhwrouibjhrouibhrwoubhroub</Text>
          <Text style={styles.description} >Preço: 10,00</Text>
        </View>
      </ScrollView>
      
      <View style={{ marginBottom: 80 }}></View>
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
})