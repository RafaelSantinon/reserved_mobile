import React, { createContext, useState } from 'react';
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

import Header from './components/Header';

export const AuthContext = createContext({} as any);

export default function Routes() {
  const [auth, setAuth] = useState();

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{auth, setAuth}}>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen 
              name="Login"
              component={Login}
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
              headerStyle: { backgroundColor: 'white'},
              header: () => <Header title="Restaurante" />
            }}
          />

          <Screen 
            name="Menus"
            component={Menus}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: 'white'},
              header: () => <Header title="Menus" />
            }}
          />


          <Screen 
            name="MenuDetails" 
            component={MenuDetails}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: 'white'},
              header: () => <Header title="Itens do menu" />
            }}
          />


          <Screen 
            name="Reserves" 
            component={Reserves}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: 'white'},
              header: () => <Header title="Reservas" />
            }}
          />

          <Screen 
            name="History" 
            component={History}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: 'white'},
              header: () => <Header title="Situação das reservas" />
            }}
          />

          <Screen 
            name="Details" 
            component={Details}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: 'white'},
              header: () => <Header title="Itens da reserva" />
            }}
          />

          <Screen 
            name="AddItem" 
            component={AddItem}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: 'white'},
              header: () => <Header title="Restaurante" />
            }}
          />
        </Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}