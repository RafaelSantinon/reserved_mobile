import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker,} from 'react-native-maps';

import MenuBar from '../../components/MenuBar';

import marker from '../../images/marker.png';
import { AuthContext } from '../../routes';
import api from '../../services/api';

interface FoodStore {
  id: string;
  name: string;
  description: string;
  openHours: string;
  address: {
    latitude: number;
    longitude: number;
  };
  image: {
    id: string;
    path: string;
  };
}

export default function FoodStoreDetails() {
  const { auth } = useContext(AuthContext);
  const route = useRoute();
  const navigation = useNavigation();
  const [foodStore, setFoodStore] = useState<FoodStore>({
    id: '',
    name: '',
    description: '',
    openHours: '',
    address: {
      latitude: 0,
      longitude: 0,
    },
    image: {
      id: '',
      path: '',
    }
  });

  const params = route.params as any;

  function googleMaps() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${foodStore.address.latitude},${foodStore.address.longitude}`);
  }

  useEffect(() => {
    if (params.id) {
      api.get(`food-store/${params.id}`, {
        headers: {
          'Authorization': `Bearer ${auth}`
        },
      }).then(
        response => {
        console.log('response :', response.data);
          setFoodStore(response.data)
        }
      ).catch(err => {
        if (err.status === 401) navigation.navigate('Login');
      });
    }
  },[params.id, auth])

  const urlImg = `https://localhost:3333/uploads/${foodStore.image.path}`

  return (
    <View style={styles.container}>

      <ScrollView style={{ marginBottom: 50 }}>
        {console.log(urlImg)}
        <View style={styles.imagesContainer}>
            <Image key={foodStore.image.id} style={styles.image} source={{ uri: urlImg}} />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{foodStore.name}</Text>
          <Text style={styles.description}>{foodStore.description}</Text>
        
          <View style={styles.mapContainer}>
            <MapView 
              initialRegion={{
                latitude: -22.906101766674592,
                longitude: -47.070579797113346,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008
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
                  latitude: foodStore.address.latitude,
                  longitude: foodStore.address.longitude
                }}
              />
            </MapView>

            <TouchableOpacity onPress={googleMaps} style={styles.routesContainer}>
              <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Situação de momento</Text>
          <Text style={styles.description}>Horário de funcionamento: {foodStore.openHours}</Text>
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