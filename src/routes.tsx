import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';

import FoodStoreDetails from './pages/FoodStore/FoodStoreDetails';
import Menus from './pages/FoodStore/Menus';
import MenuDetails from './pages/FoodStore/MenuDetails';
import Reserves from './pages/FoodStore/Reserves';

import History from './pages/Reserves/History';
import Details from './pages/Reserves/Details';
import AddItem from './pages/Reserves/AddItem';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen 
            name="Login" 
            component={Home}
        />

        <Screen 
            name="CreateUser" 
            component={CreateUser}
        />

        <Screen 
            name="Home" 
            component={Home}
        />

        <Screen 
          name="FoodStoreDetails" 
          component={FoodStoreDetails}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'white'}
            // header: () => <Header showCancel={false} title="Restaurante" />
          }}
        />

        <Screen 
          name="Menus" 
          component={Menus}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'white'}
            // header: () => <Header showCancel={false} title="Restaurante" />
          }}
        />


        <Screen 
          name="MenuDetails" 
          component={MenuDetails}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'white'}
            // header: () => <Header showCancel={false} title="Restaurante" />
          }}
        />


        <Screen 
          name="Reserves" 
          component={Reserves}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'white'}
            // header: () => <Header showCancel={false} title="Restaurante" />
          }}
        />

        <Screen 
          name="History" 
          component={History}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'white'}
            // header: () => <Header showCancel={false} title="Restaurante" />
          }}
        />

        <Screen 
          name="Details" 
          component={Details}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'white'}
            // header: () => <Header showCancel={false} title="Restaurante" />
          }}
        />

        <Screen 
          name="AddItem" 
          component={AddItem}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'white'}
            // header: () => <Header showCancel={false} title="Restaurante" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}