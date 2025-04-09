import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

export default function App() {
  return (
      <PaperProvider>
        <NavigationContainer>

          <Tab.Navigator>

            <Tab.Screen name = 'HomeScreen' component={HomeScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color}/>
              )
            }}
            />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name ="person" size={size} color={color}/>
              )
            }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen} 
            options={{
              tabBarIcon: ({ color, size}) => (
                <Ionicons name="settings" size={size} color={color}/>
              )
            }}
            />

          </Tab.Navigator>

        </NavigationContainer>
      </PaperProvider>
  );
}
