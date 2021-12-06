import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import MenuBar from '../components/MenuBar';

import marker from '../images/marker.png';
import api from '../services/api';
import { AuthContext } from '../routes';

interface FoodStore {
  id: string;
  name: string;
  address: any;
}

export default function Home() {
  const navigation = useNavigation();
  const { auth } = useContext(AuthContext);
  const [foodStores, setFoodStores] = useState<FoodStore[]>([])

  function navigateToFoodStoreDetails() {
    navigation.navigate('FoodStoreDetails')
  }

  useEffect(() => {
    api.get('food-store', {
      headers: {
        'Authorization': `Bearer ${auth}`
      }
    }).then(response => {

      setFoodStores(response.data.rows)
    }).catch(err => {
      if (err.status === 401) navigation.navigate('Login')
    });
  }, [auth])

  return(
    <View style={styles.container}>
      <View style={styles.search}>
        <Text style={styles.searchText}>1 restaurantes próximos</Text>

        <RectButton style={styles.searchButton} onPress={() => {}}>
          <Feather name="search" size={20} color="#FFF" />
        </RectButton>
      </View>

      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -22.9177728,
          longitude: -47.1386178,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >

      {console.log(foodStores)}

      {foodStores.map(foodStore => {
        console.log('foodStore :', foodStore);
        return(
          <Marker
            key={foodStore.id}
            icon={marker}
            calloutAnchor={{
              x: 3.2,
              y: 1,
            }}
            coordinate={{
              latitude: foodStore?.address?.latitude,
              longitude: foodStore?.address?.longitude,
            }}
          >
            <Callout tooltip onPress={() => navigateToFoodStoreDetails()}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{foodStore.name}</Text>
              </View>
            </Callout>
          </Marker>
        )
      })}

      </MapView>

      <MenuBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1
  },

  calloutText: {
    fontFamily: 'Roboto_500Medium',
    color: 'black',
    fontSize: 16,
  },

  search: {
    position: 'absolute',
    left: 24,
    right: 24,
    top: 70,

    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  searchText: {
    fontFamily: 'Roboto_500Medium',
    color: 'black',
    fontSize: 16,
  },

  searchButton: {
    width: 56,
    height: 56,
    backgroundColor: '#4e3333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
