import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker,} from 'react-native-maps';

import MenuBar from '../../components/MenuBar';

import marker from '../../images/marker.png';

export default function FoodStoreDetails() {
  const navigation = useNavigation();

  function googleMaps() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${-22.907959720822245},${-47.0725974488087}`);
  }

  return (
    <View style={styles.container}>

      <ScrollView style={{ marginBottom: 50 }}>
        <View style={styles.imagesContainer}>
            <Image style={styles.image} source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Restaurante teste 1</Text>
          <Text style={styles.description}>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</Text>
        
          <View style={styles.mapContainer}>
            <MapView 
              initialRegion={{
                latitude: -27.2092052,
                longitude: -49.6401092,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
              }} 
              zoomEnabled={false}
              pitchEnabled={false}
              scrollEnabled={false}
              rotateEnabled={false}
              style={styles.mapStyle}
            >
              <Marker 
                icon={marker}
                coordinate={{ 
                  latitude: -27.2092052,
                  longitude: -49.6401092
                }}
              />
            </MapView>

            <TouchableOpacity onPress={googleMaps} style={styles.routesContainer}>
              <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Situação de momento</Text>
          <Text style={styles.description}>Horário de funcionamento:</Text>
          <Text style={styles.description}>Taxa de ocupação:</Text>

          <RectButton style={styles.button} onPress={() => {
            navigation.navigate('Menus')
          }}>
            <Text style={styles.buttonText}>Menu</Text>
          </RectButton>

          <RectButton style={styles.button} onPress={() => {
            navigation.navigate('Reserves')
          }}>
            <Text style={styles.buttonText}>Reservar</Text>
          </RectButton>
        </View>
      </ScrollView>

      <MenuBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
  },

  description: {
    fontFamily: 'Roboto_500Medium',
    color: 'black',
    lineHeight: 24,
    marginTop: 16,
    fontSize: 20,
  },

  mapContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 40,
    backgroundColor: '#4e3333',
    marginBottom: 20
  },

  mapStyle: {
    width: '100%',
    height: 150,
  },

  routesContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routesText: {
    fontFamily: 'Roboto_700Bold',
    color: 'white'
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