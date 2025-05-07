// App.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TituloScreen from './screens/TituloScreen'; // Corrigido aqui

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#C8102E' },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            tabBarActiveTintColor: '#C8102E',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: '#fff' },
          }}
        >
          <Tab.Screen
            name="Escudo"
            component={EscudoScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="shield" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Jogadores"
            component={JogadoresScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="people" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Títulos"
            component={TituloScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="trophy" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
